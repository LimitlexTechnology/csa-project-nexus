 'use client';
 import React, { useEffect, useState } from 'react';
 import { useRouter } from 'next/navigation';
 import { getFirebaseAuth } from '../lib/firebase';
 import { onAuthStateChanged } from 'firebase/auth';
 
 export default function AuthGuard({ children }: { children: React.ReactNode }) {
   const router = useRouter();
   const [checked, setChecked] = useState(false);
   const [authed, setAuthed] = useState(false);
 
   useEffect(() => {
     const auth = getFirebaseAuth();
     if (!auth) {
       setAuthed(true);
       setChecked(true);
       return;
     }

     const unsub = onAuthStateChanged(auth, (user) => {
       setAuthed(!!user);
       setChecked(true);
       if (!user) router.replace('/login');
     });
     return () => unsub();
   }, [router]);
 
   if (!checked) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="w-8 h-8 border-4 border-gray-200 border-t-[#2E7D32] rounded-full animate-spin"></div>
       </div>
     );
   }
 
   if (!authed) return null;
   return <>{children}</>;
 }
