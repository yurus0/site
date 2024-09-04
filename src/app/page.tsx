"use client";
import VerticalBanner from "@/components/VerticalBanner";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  let bg = "bg-black text-white";
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [sectionName, setSection] = useState<'exp' | 'proj' | 'cred' | 'nan'>('nan');


  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById('dark-section');
      if (section2) {
        const rect = section2.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          setTheme('dark');
          setLoaderVisible(true);
          console.log('dark');
        }
      }

      const section = document.getElementById('light-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          setTheme('light');
          setLoaderVisible(false);
          console.log('light');
        }
      }
      // Check if 'dark-cov-bg' is in view
      const sectionCov = document.getElementById('dark-cov-bg');
      if (sectionCov) {
        const rect = sectionCov.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.top > 0;
        if (isInView) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }

      const sectionExp = document.getElementById('sec-exp');
      if (sectionExp) {
        const rect = sectionExp.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          setSection('exp');
          console.log('Section: exp');
        } else {
          setSection('nan');
        }
      }

      // Check if 'sec-proj' is in view
      const sectionProj = document.getElementById('sec-proj');
      if (sectionProj) {
        const rect = sectionProj.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          setSection('proj');
          console.log('Section: proj');
        } else if (sectionName === 'proj') {
          setSection('nan');
        }
      }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [sectionName]);

  return (
    <main className={`flex min-h-screen flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`flex flex-row ${theme === 'dark' ? 'bg-black text-white' : 'bg-black text-white'}`}>
      <VerticalBanner theme={theme} loaderVisible={loaderVisible} section={sectionName} />

      <div id='dark-section' className="flex bg-black text-white min-h-screen flex-col p-24 items-start">
      <div className="min-h-min pt-24 pb-96 px-40">
        <div className="text-left">
          <div className="text-[#ffffff]/50 font-bold pb-8">Imane Benrazzouk</div>
          <div className="text-3xl font-bold pb-2">Hello, there!</div>
          <div className="text-6xl font-bold pb-2">Hello, t<span className="hover:text-yellow-500">h</span>er<span className="hover:text-purple-500">e</span>!</div>
          <div className="text-9xl font-bold pb-4">He<span className="hover:text-cyan-500">l</span>lo, th<span className="hover:text-pink-500">e</span>re!</div>
          <div className="text-3xl font-medium">Just a Software Engineer who likes writing shy code.</div>
        </div>
      </div>
      </div>
      </div>
      <div id='light-section'>
      <div id='sec-exp'>
      <div className="min-h-96 pt-48" >
      <div className=" pl-48 flex flex-col pb-20">
        <h1 className="text-xl font-light text-black pb-4">2024</h1>
        <h2 className="pb-2 text-4xl font-semibold text-black">
          Bank Al Maghrib
        </h2>
        <p className={`text-4xl font-semibold  ${theme === 'dark' ? 'text-purple-100 opacity-40' : 'text-purple-950 opacity-20'}`}>
          Central Bank of Morocco
        </p>
      </div>
      <div className="min-h-96 bg-purple-50">
        <div className="flex justify-end items-center opacity-50 py-20">
        <Image
            src="/Bank_Al-Maghrib_logo.svg"
            alt="bam"
            width={500}
            height={500}
            className="pr-10"
          />
          <Image
            src="/bkam.png"
            alt="bam"
            width={800}
            height={500}
          />
          </div>
      </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        <div className="w-2/3 px-20 py-10 text-xl font-light">
        For the past summer, I have been collaborating with the Data Analytics Department on an internal tool for anomaly flagging. This project involved developing and optimizing algorithms to enhance data quality and accuracy across the organization.
        <br/> <br/>
        The nature of the work is confidential, but if you want to learn more about this experience, feel free to reach out.
        </div>
        <div className="w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SWE & RESEARCH ASSISTANT
          </div>
          <div className="text-md font-light pt-1">
            Data Science <br/> Machine Learning <br/> Software Development
          </div><div className="pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">

            <LockClosedIcon className="h-4 w-4" />
            <span className="pl-1 underline underline-offset-1">View Work</span>
          </div></div>
      </div>
      <div className="min-h-96 pt-48" >
      <div className=" pl-48 flex flex-col pb-20">
        <h1 className="text-xl font-light text-black pb-4">2023</h1>
        <h2 className="pb-2 text-4xl font-semibold text-black">
          FeverTokens
        </h2>
        <p className='text-4xl font-semibold text-red-500 opacity-70'>
          Blockchain & NFTs
        </p>
      </div>
      <div id='light-section' className="min-h-96 bg-red-100">
        <div className="flex justify-end items-center py-20">
        <Image
            src="/FTname.png"
            alt="bam"
            width={500}
            height={500}
            className="pr-10"
          />
          <Image
            src="/bkam.png"
            alt="bam"
            width={800}
            height={500}
          />
          </div>
      </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        <div className="w-2/3 px-20 py-10 text-xl font-light">
        For a period of 4 months, I&apos;ve been collaborating with the Dev Team of FeverTokens to work on 3 main Features. Contributed to the team&apos;s success by delivering impactful solutions in a fast-paced, collaborative development setting.
        <br/>
        </div>
        <div className="w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SOFTWARE DEVELOPEMENT ENGINEER
          </div>
          <div className="text-md font-light pt-1">
            Software Development <br/> Blockchain <br/> Cloud Infrastructure <br/> APIs
          </div><div className="pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
          <Link href="https://app.fevertokens.io/"><span className="underline underline-offset-1">View Website</span></Link>
          </div></div>
      </div>
      </div>
      <div id='sec-proj'>
      <div className="min-h-96 pl-48 flex flex-col justify-end items-start bg-white" >
      <div className="pb-10 flex flex-col">
        <h2 className="pb-4 text-4xl font-semibold text-black">
          Vowels Island{" "}
        </h2>
        <p className="text-4xl font-semibold opacity-50 text-blue-700">
          Vowels game for kids with Dyslexia.
        </p>
      </div>
      </div>
      <div id='dark-cov-bg' className="min-h-96 bg-gray-950 flex flex-row justify-center items-center">
      <Image
            src="/cov3.png"
            alt="covmodel"
            width={1000}
            height={500}
          />
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        <div className="w-2/3 px-20 py-10 text-xl font-light">
        For the past summer, I&apos;ve been collaborating with the Data Analytics Department on an internal tool for anomaly flagging. This project involved developing and optimizing algorithms to enhance data quality and accuracy across the organization.
        <br/> <br/>
        The nature of the work is confidential, but if you want to learn more about this experience, feel free to reach out.
        </div>
        <div className="w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SWE & RESEARCH ASSISTANT
          </div>
          <div className="text-md font-light pt-1">
            Data Science <br/> Machine Learning <br/> Software Development
          </div><div className="pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">

            <LockClosedIcon className="h-4 w-4" />
            <span className="pl-1 underline underline-offset-1">View Work</span>
          </div></div>
      </div>
      </div>

      </div>
    </main>
  );
}
