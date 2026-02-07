 'use client';
 import React, { useState } from 'react';
 import Link from 'next/link';
 import { Logo } from '../../../components/Logo';
 import { ArrowLeft, Download, Share2, BookOpen, Clock, CheckCircle, Heart, MessageCircle, X, Mail, Copy, Facebook, Linkedin, Twitter } from 'lucide-react';
 
 export default function KnowledgeHubDetailClient({ resource, related, resourceId }: { resource: any, related: any[], resourceId: number }) {
   const [likes, setLikes] = useState(1200);
   const [isLiked, setIsLiked] = useState(false);
   const [showCommentModal, setShowCommentModal] = useState(false);
   const [showShareModal, setShowShareModal] = useState(false);
   const [comments, setComments] = useState(156);
   const [commentText, setCommentText] = useState('');
   const [commentName, setCommentName] = useState('');
   const [commentEmail, setCommentEmail] = useState('');
 
   return (
     <div className="min-h-screen bg-gray-50">
       <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
         <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
           <Link href="/knowledge-hub" className="flex items-center gap-2 text-gray-900 hover:text-[#2E7D32] transition-colors">
             <ArrowLeft size={24} />
             <span className="font-bold">Knowledge Hub</span>
           </Link>
           <Link href="/dashboard">
             <Logo />
           </Link>
         </div>
       </header>
 
       <main className="max-w-4xl mx-auto px-6 py-12">
         <div className="rounded-[40px] overflow-hidden mb-12 h-96 bg-gray-200">
           <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
         </div>
 
         <div className="mb-12">
           <div className="flex flex-wrap items-center gap-4 mb-6">
             <span className="px-4 py-2 bg-green-50 text-[#2E7D32] rounded-full text-xs font-black uppercase tracking-widest">{resource.type}</span>
             <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
               <Clock size={16} />
               {resource.duration}
             </div>
           </div>
 
           <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">{resource.title}</h1>
 
           <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">{resource.description}</p>
 
           <div className="flex flex-wrap gap-4">
             {resource.downloadUrl && (
               <a href={resource.downloadUrl} className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-2xl transition-all">
                 <Download size={20} />
                 Download Guide
               </a>
             )}
             <button onClick={() => setShowShareModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-2xl transition-all">
               <Share2 size={20} />
               Share
             </button>
           </div>
         </div>
 
         <div className="flex items-center gap-8 my-12 py-8 border-b border-gray-100">
           <button
             onClick={() => {
               setIsLiked(!isLiked);
               setLikes(isLiked ? likes - 1 : likes + 1);
             }}
             className={`flex items-center gap-2 font-bold transition-colors ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
           >
             <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
             <span>{likes}</span>
           </button>
           <button onClick={() => setShowCommentModal(true)} className="flex items-center gap-2 text-gray-600 hover:text-[#2E7D32] transition-colors font-bold">
             <MessageCircle size={20} />
             <span>{comments}</span>
           </button>
         </div>
 
         <div className="bg-blue-50 rounded-[40px] p-10 mb-12">
           <div className="flex items-center gap-3 mb-6">
             <BookOpen className="text-blue-600" size={28} />
             <h3 className="text-2xl font-bold text-gray-900">What You'll Learn</h3>
           </div>
           <ul className="space-y-3">
             {resource.learningPoints.map((point: string, idx: number) => (
               <li key={idx} className="flex items-start gap-3">
                 <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                 <span className="text-gray-700 font-medium">{point}</span>
               </li>
             ))}
           </ul>
         </div>
 
         <div className="prose prose-lg max-w-none mb-16">
           <div dangerouslySetInnerHTML={{ __html: resource.content }} className="text-gray-700 leading-relaxed space-y-6" />
         </div>
 
         {resource.videoUrl && (
           <div className="my-16">
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn More - Video</h3>
             <div className="rounded-[40px] overflow-hidden bg-gray-200 aspect-video">
               <iframe
                 width="100%"
                 height="600"
                 src={resource.videoUrl}
                 title="Resource Video"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 className="rounded-[40px]"
               ></iframe>
             </div>
           </div>
         )}
 
         {related.length > 0 && (
           <div className="my-20">
             <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {related.map((relatedItem) => (
                 <div
                   key={relatedItem.id}
                   className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
                   onClick={() => (window.location.href = `/knowledge-hub/${relatedItem.id}`)}
                 >
                   <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                     <img src={relatedItem.image} alt={relatedItem.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-6">
                     <p className="text-xs font-bold text-[#2E7D32] uppercase tracking-widest mb-3">{relatedItem.type}</p>
                     <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors line-clamp-2 mb-3">{relatedItem.title}</h4>
                     <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                       <Clock size={16} />
                       {relatedItem.duration}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         )}
 
         <div className="bg-gradient-to-br from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-center my-20">
           <h3 className="text-3xl font-black text-white mb-4">Ready to Transform Your Farm?</h3>
           <p className="text-green-50/70 font-medium mb-8 text-lg">Connect with expert advisors and access personalized recommendations on the CSA Hub.</p>
           <Link href="/dashboard" className="inline-block px-10 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg">
             Visit Dashboard
           </Link>
         </div>
       </main>
 
       {showCommentModal && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
           <div className="bg-white rounded-[40px] max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
             <div className="sticky top-0 bg-white flex items-center justify-between p-8 border-b border-gray-100">
               <h3 className="text-2xl font-bold text-gray-900">Comments ({comments})</h3>
               <button onClick={() => setShowCommentModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                 <X size={24} />
               </button>
             </div>
 
             <div className="p-8 space-y-8">
               <div className="bg-gray-50 rounded-[32px] p-8">
                 <h4 className="text-lg font-bold text-gray-900 mb-6">Share Your Feedback</h4>
                 <div className="space-y-4">
                   <input
                     type="text"
                     placeholder="Your name"
                     value={commentName}
                     onChange={(e) => setCommentName(e.target.value)}
                     className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all"
                   />
                   <input
                     type="email"
                     placeholder="Your email"
                     value={commentEmail}
                     onChange={(e) => setCommentEmail(e.target.value)}
                     className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all"
                   />
                   <textarea
                     placeholder="Your comment..."
                     value={commentText}
                     onChange={(e) => setCommentText(e.target.value)}
                     rows={4}
                     className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all resize-none"
                   />
                   <button
                     onClick={() => {
                       if (commentText && commentName) {
                         setComments(comments + 1);
                         setCommentText('');
                         setCommentName('');
                         setCommentEmail('');
                         alert('Thank you! Your comment has been posted.');
                       }
                     }}
                     className="w-full py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-2xl transition-all"
                   >
                     Post Comment
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )}
 
       {showShareModal && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
           <div className="bg-white rounded-[40px] max-w-md w full shadow-2xl p-8">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-bold text-gray-900">Share Resource</h3>
               <button onClick={() => setShowShareModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                 <X size={24} />
               </button>
             </div>
 
             <div className="space-y-4">
               <button
                 onClick={() => {
                   window.open(`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/knowledge-hub/${resourceId}`, '_blank');
                 }}
                 className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all"
               >
                 <Facebook className="text-blue-600" size={24} />
                 <span className="font-bold text-gray-900">Share on Facebook</span>
               </button>
 
               <button
                 onClick={() => {
                   window.open(`https://twitter.com/intent/tweet?url=http://localhost:3000/knowledge-hub/${resourceId}&text=${resource.title}`, '_blank');
                 }}
                 className="w-full flex items-center gap-4 p-4 bg-sky-50 hover:bg-sky-100 rounded-2xl transition-all"
               >
                 <Twitter className="text-sky-500" size={24} />
                 <span className="font-bold text-gray-900">Share on Twitter</span>
               </button>
 
               <button
                 onClick={() => {
                   window.open(`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/knowledge-hub/${resourceId}`, '_blank');
                 }}
                 className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all"
               >
                 <Linkedin className="text-blue-700" size={24} />
                 <span className="font-bold text-gray-900">Share on LinkedIn</span>
               </button>
 
               <div className="pt-4 border-t border-gray-100">
                 <p className="text-sm font-bold text-gray-500 mb-3">Or copy the link:</p>
                 <div className="flex gap-2">
                   <input type="text" value={`http://localhost:3000/knowledge-hub/${resourceId}`} readOnly className="flex-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-gray-600 font-mono" />
                   <button
                     onClick={() => {
                       navigator.clipboard.writeText(`http://localhost:3000/knowledge-hub/${resourceId}`);
                       alert('Link copied to clipboard!');
                     }}
                     className="px-4 py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-2xl transition-all"
                   >
                     <Copy size={20} />
                   </button>
                 </div>
               </div>
 
               <div className="pt-4">
                 <button
                   onClick={() => {
                     const subject = encodeURIComponent(`Check this resource: ${resource.title}`);
                     const body = encodeURIComponent(`I found this helpful resource:\n\n${resource.title}\n\nhttp://localhost:3000/knowledge-hub/${resourceId}`);
                     window.open(`mailto:?subject=${subject}&body=${body}`);
                   }}
                   className="w-full flex items-center gap-4 p-4 bg-orange-50 hover:bg-orange-100 rounded-2xl transition-all"
                 >
                   <Mail className="text-orange-600" size={24} />
                   <span className="font-bold text-gray-900">Share via Email</span>
                 </button>
               </div>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
