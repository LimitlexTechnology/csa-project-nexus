 'use client';
 import React, { useState } from 'react';
 import AuthGuard from '../../components/AuthGuard';
 import { storage } from '../../lib/firebase';
 import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
 import { Logo } from '../../components/Logo';
 import Link from 'next/link';
 
 export default function StorageUploadPage() {
   const [file, setFile] = useState<File | null>(null);
   const [path, setPath] = useState('uploads');
   const [progress, setProgress] = useState<number>(0);
   const [url, setUrl] = useState<string | null>(null);
   const [error, setError] = useState<string | null>(null);
   const [uploading, setUploading] = useState(false);
 
   const startUpload = () => {
     if (!file) {
       setError('Select a file');
       return;
     }
     setError(null);
     setUrl(null);
     setUploading(true);
     const filename = `${Date.now()}-${file.name}`;
     const storageRef = ref(storage, `${path}/${filename}`);
     const task = uploadBytesResumable(storageRef, file);
     task.on(
       'state_changed',
       (snap) => {
         const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
         setProgress(pct);
       },
       (e) => {
         setError(e?.message || 'Upload failed');
         setUploading(false);
       },
       async () => {
         const downloadUrl = await getDownloadURL(task.snapshot.ref);
         setUrl(downloadUrl);
         setUploading(false);
       }
     );
   };
 
   return (
     <AuthGuard>
       <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
         <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
           <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
             <Link href="/dashboard">
               <Logo />
             </Link>
             <h1 className="text-xl font-bold text-gray-900">Storage Upload</h1>
           </div>
         </header>
 
         <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-10">
           <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-6">
             {error && <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">{error}</div>}
 
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
               <div className="md:col-span-2">
                 <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Choose File</label>
                 <input
                   type="file"
                   onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#2E7D32]/10"
                 />
               </div>
               <div>
                 <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Folder Path</label>
                 <input
                   type="text"
                   value={path}
                   onChange={(e) => setPath(e.target.value)}
                   placeholder="uploads"
                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#2E7D32]/10"
                 />
               </div>
             </div>
 
             <button
               onClick={startUpload}
               disabled={uploading || !file}
               className={`w-full py-4 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all active:scale-[0.98] ${uploading ? 'opacity-70 cursor-not-allowed' : ''}`}
             >
               {uploading ? 'Uploading…' : 'Upload'}
             </button>
 
             <div className="space-y-2">
               <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-[#2E7D32]" style={{ width: `${progress}%` }}></div>
               </div>
               <div className="text-sm font-bold text-gray-500">{progress}%</div>
             </div>
 
             {url && (
               <div className="p-4 bg-green-50 border border-green-100 rounded-2xl">
                 <p className="text-sm font-bold text-green-700">File uploaded</p>
                 <a href={url} target="_blank" rel="noreferrer" className="text-[#2E7D32] font-bold break-all">{url}</a>
               </div>
             )}
           </div>
         </main>
       </div>
     </AuthGuard>
   );
 }
