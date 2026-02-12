'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db, storage } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface UserProfile {
    email: string;
    role: string;
    fullName?: string;
    location?: string;
    photoURL?: string;
    onboardingDone?: boolean;
    createdAt?: string;
    [key: string]: any;
}

interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    signOutUser: () => Promise<void>;
    updateProfile: (data: Partial<UserProfile>) => Promise<void>;
    uploadProfilePhoto: (file: File) => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubAuth = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            if (!firebaseUser) {
                setProfile(null);
                setLoading(false);
            }
        });
        return () => unsubAuth();
    }, []);

    // Listen to Firestore profile document
    useEffect(() => {
        if (!user) return;

        const unsubProfile = onSnapshot(
            doc(db, 'users', user.uid),
            (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data() as UserProfile;
                    setProfile(data);
                    // Keep localStorage in sync
                    if (data.role) {
                        localStorage.setItem('userRole', data.role);
                    }
                }
                setLoading(false);
            },
            (error) => {
                console.error('Error listening to profile:', error);
                setLoading(false);
            }
        );

        return () => unsubProfile();
    }, [user]);

    const signOutUser = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('userRole');
            localStorage.removeItem('userRoleData');
            localStorage.removeItem('onboardingDone');
            router.push('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const updateProfile = async (data: Partial<UserProfile>) => {
        if (!user) return;
        try {
            await updateDoc(doc(db, 'users', user.uid), data);
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    };

    const uploadProfilePhoto = async (file: File): Promise<string> => {
        if (!user) throw new Error('No user logged in');

        const storageRef = ref(storage, `profilePhotos/${user.uid}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        // Update Firestore with the new photo URL
        await updateDoc(doc(db, 'users', user.uid), { photoURL: downloadURL });

        return downloadURL;
    };

    return (
        <AuthContext.Provider value={{ user, profile, loading, signOutUser, updateProfile, uploadProfilePhoto }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
