"use client";
import VerticalBanner from "@/components/VerticalBanner";
import { useEffect, useState } from "react";

export default function Home() {
   let bg = "bg-black text-white";
   const [theme, setTheme] = useState<'dark' | 'light'>('dark');
   const [loaderVisible, setLoaderVisible] = useState(true);


   useEffect(() => {
     const handleScroll = () => {
       const section = document.getElementById('light-section');
       if (section) {
         const rect = section.getBoundingClientRect();
         const isInView1 = rect.top < window.innerHeight && rect.bottom > 0;
         if (isInView1) {
           setTheme('light');
           setLoaderVisible(false);
           console.log('light');
         }
         const section2 = document.getElementById('dark-section');
         if (section2) {
           const rect = section2.getBoundingClientRect();
           const isInView = rect.top < window.innerHeight && rect.bottom > 0;
           if (isInView && !isInView1) {
             setTheme('dark');
             setLoaderVisible(true);
             console.log('dark');
           }
         }
       }
     };

     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

  return (
    <main className={`flex min-h-screen flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`flex flex-row ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <VerticalBanner theme={theme} loaderVisible={loaderVisible}/>

       <div id='dark-section' className="flex min-h-screen flex-col p-24 items-start">
       <div className="min-h-screen py-24 px-40">
         <div className="text-left">
           <div className="text-[#ffffff]/50 font-bold pb-8">Imane Benrazzouk</div>
           <div className="text-3xl font-bold pb-2">Hello, there!</div>
           <div className="text-6xl font-bold pb-2">Hello, t<span className="text-yellow-500">h</span>er<span className="text-purple-500">e</span>!</div>
           <div className="text-9xl font-bold pb-4">He<span className="text-cyan-500">l</span>lo, th<span className="text-pink-500">e</span>re!</div>
           <div className="text-3xl font-medium">Just a Software Engineer who likes writing shy code.</div>
         </div>
       </div>
       </div>
       </div>
       <div className="min-h-96 flex flex-row justify-center items-center" >
       <div id='light-section' className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
         <a
           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
         </a>

        <a
          href="https://github.com/yurus0/Covmodel"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
         >
          <h2 className="mb-3 text-2xl font-semibold">
            Covmodel{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
             </span></h2>
             <p>
             Instantly deploy your Next.js site to a shareable URL with Vercel.
           </p>
         </a>
         </div>
       </div>
       <div className="min-h-96 bg-pink-200 flex flex-row justify-center items-center">
         <div className="text-center text-4xl">
           Get in touch !
         </div>
       </div>
     </main>
   );
}