"use client";
import GithubIcon from "@/components/GithubIcon";
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
      const darkSection = document.getElementById('dark-section');
      const lightSection = document.getElementById('light-section');
      const darkCovBg = document.getElementById('dark-cov-bg');
      const sectionExp = document.getElementById('sec-exp');
      const sectionProj = document.getElementById('sec-proj');
      const sectionCred = document.getElementById('sec-cred');

      const isElementInView = (element: HTMLElement | null) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      };
      const isElementInViewTop = (element: HTMLElement | null) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight /2 && rect.bottom >window.innerHeight /4;
      }

      if (isElementInView(darkSection) || isElementInViewTop(darkCovBg)) {
        setTheme('dark');
        if(isElementInView(darkSection) && !isElementInView(darkCovBg)){
          setLoaderVisible(true);
        }
      } else if (isElementInView(lightSection)) {
        setTheme('light');
        setLoaderVisible(false);
      }

      if (isElementInView(sectionExp)) {
        setSection('exp');
      } else if (isElementInView(sectionProj) && !isElementInViewTop(sectionCred)) {
        setSection('proj');
      } else if (isElementInView(sectionCred)) {
        setSection('cred');
      } else {
        setSection('nan');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`flex flex-col min-h-screen w-full ${theme === "dark" ? 'bg-black text-white' : 'bg-white text-black'}`}>
  <div className="flex flex-col md:flex-row">
    <VerticalBanner theme={theme} loaderVisible={loaderVisible} section={sectionName} />
    <div id='dark-section' className="flex flex-col min-h-screen p-6 md:p-24 items-start px-20">
      <div className="min-h-96 pt-24 md:pt-48 px-4 md:px-40 cursor-default">
        <div className="text-left">
          <div className="text-[#ffffff]/50 font-light pb-2 md:pb-8">Imane Benrazzouk</div>
          <div className="text-3xl font-bold pb-2">Hello, there!</div>
          <div className="text-6xl font-bold pb-2">Hello, t<span className="hover:text-yellow-500">h</span>er<span className="hover:text-purple-500">e</span>!</div>
          <div className="text-9xl font-bold pb-4">He<span className="hover:text-cyan-500">l</span>lo, th<span className="hover:text-pink-500">e</span>re!</div>
          <div className="text-3xl font-medium">Just a Software Engineer who likes writing shy code.</div>
        </div>
      </div>
    </div>
    </div>
    <div id='light-section' className={`min-h-screen md:min-h-auto pt-6 md:pt-0 ${theme === "dark" ? 'bg-black text-black' : 'bg-white text-black'}`}>
      <div id='sec-exp' className="min-h-96 pt-6 md:pt-96">
        <div className="pl-6 md:pl-48 flex flex-col pb-4 md:pb-20">
          <h1 className="text-xl font-light text-black pb-2 md:pb-4">2024</h1>
          <h2 className="pb-2 text-4xl font-semibold text-black">
            Bank Al Maghrib
          </h2>
          <p className={`text-4xl font-semibold ${theme === "dark" ? 'text-purple-100 opacity-40' : 'text-purple-950 opacity-20'}`}>
            Central Bank of Morocco
          </p>
        </div>
        <div className="flex justify-center items-center bg-opacity-50 py-2 md:py-20 bg-purple-50">
          <div className="pr-4 md:pr-10">
            <Image
              src="/Bank_Al-Maghrib_logo.svg"
              alt="bam"
              width={300}
              height={300}
              className="opacity-50"
              priority
            />
          </div>
          <div>
            <Image
              src="/bkam.png"
              alt="bam"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          For the past summer, I have been collaborating with the Data Analytics Department on an internal tool for anomaly flagging. This project involved developing and optimizing algorithms to enhance data quality and accuracy across the organization.
          <br /> <br />
          The nature of the work is confidential, but if you want to learn more about this experience, feel free to reach out.
        </div>
        <div className="animate-fade animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SWE & RESEARCH ASSISTANT
          </div>
          <div className="text-md font-light pt-1">
            Data Science <br /> Machine Learning <br /> Software Development
          </div>
          <div className="pt-6 md:pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
            <LockClosedIcon className="h-4 w-4" />
            <span className="pl-1 underline underline-offset-1">View Work</span>
          </div>
        </div>
      </div>

      <div className="min-h-96 pt-12 md:pt-48">
        <div className="pl-6 md:pl-48 flex flex-col pb-10 md:pb-20">
          <h1 className="text-xl font-light text-black pb-2 md:pb-4">2023</h1>
          <h2 className="pb-2 text-2xl md:text-4xl font-semibold text-black">
            FeverTokens
          </h2>
          <p className="text-2xl md:text-4xl font-semibold text-red-500 opacity-70">
            Blockchain & NFTs
          </p>
        </div>
        <div className="min-h-96 bg-[url('/ft_bg.png')] bg-cover bg-center">
          <div className="bg-red-300 h-full bg-opacity-60 pt-6 md:pt-10 px-6 md:px-10 pb-80 md:pb-64">
            <div className="flex justify-end items-end pb-6 md:pb-20 opacity-70">
              <Image
                src="/FTname.png"
                alt="ft"
                width={150}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade-left animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          My internship at FeverTokens, a prominent French company specializing in Blockchain technology, provided me with an in-depth experience in implementing crucial features to enhance the platform&apos;s functionality.
          <br /> Over a span of four months, I focused on three pivotal tasks that were central to improving security, customization, and data collection.
          <br /> <br />
          I made meaningful contributions to the team&apos;s success by implementing solutions that truly made an impact in a fast-paced, collaborative environment. This hands-on experience sharpened my technical skills and reinforced my ability to thrive in a dynamic, high-pressure setting.
        </div>
        <div className="animate-fade-right animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SOFTWARE DEVELOPMENT ENGINEER
          </div>
          <div className="text-md font-light pt-1">
            Software Development <br /> Blockchain <br /> Cloud Infrastructure <br /> APIs
          </div>
          <div className="pt-6 md:pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
            <Link href="https://app.fevertokens.io/sign-in">
              <span className="underline underline-offset-1">View Website</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="min-h-96 pt-12 md:pt-48 bg-white">
        <div className="pl-6 md:pl-48 flex flex-col pb-10 md:pb-20">
          <h1 className="text-xl font-light text-black pb-2 md:pb-4">2021</h1>
          <h2 className="pb-2 text-2xl md:text-4xl font-semibold text-black">
            Genazure
          </h2>
          <p className="text-2xl md:text-4xl font-semibold text-teal-500 opacity-70">
            Bioinformatics and E-Medicine
          </p>
        </div>
        <div id='dark-cov-bg' className="min-h-96 bg-gray-950">
          <div className="flex justify-center items-center">
            <Image
              src="/cov3.png"
              alt="covmodel"
              width={800}
              height={250}
              priority
            />
          </div>
        </div>
      </div>

      <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade-left animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          Our journey with the Covid infection recognition project began with a deep dive into a study from October 2020, which served as the foundation for building a robust Deep Learning model. The goal was clear: create a model capable of accurately identifying Covid infection in alveolar stem cells. We experimented with various approaches and ultimately succeeded in enhancing the model&apos;s accuracy from 68.96% to 79.31%. This improvement was achieved by expanding the dataset and fine-tuning the algorithms to better capture the nuances in the data.
          <br /> <br />
          The final step was to bring this model to life in a user-friendly interface. Using the Streamlit Framework, we developed a GUI that made the system incredibly accessible. The result was a sleek, interactive platform where users could simply drag and drop their input images, making complex bioinformatics more approachable for everyone involved.
        </div>
        <div className="animate-fade-right animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            RESEARCH ASSISTANT
          </div>
          <div className="text-md font-light pt-1">
            Software Development <br /> Data Science <br /> Machine Learning <br /> Bioinformatics
          </div>
          <div className="pt-6 md:pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
            <Link href="https://github.com/yurus0/Covmodel">
              <span className="underline underline-offset-1">View Work</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
  
  <div id='sec-proj' className="overflow-hidden">
  {/* Research Section */}
  <div className="min-h-96 pt-12 md:pt-48">
    <div className="pl-6 md:pl-48 flex flex-col pb-10 md:pb-20">
      <h1 className="text-xl font-light text-black pb-2 md:pb-4">Research</h1>
      <h2 className="pb-2 text-2xl md:text-4xl font-semibold text-black">
        Vowels Island
      </h2>
      <p className="text-2xl md:text-4xl font-semibold text-blue-500 opacity-70">
        Vowels game for kids with Dyslexia.
      </p>
    </div>

  {/* Image Section */}
  <div id='dark-cov-bg' className="min-h-screen bg-gray-950 bg-cover bg-center flex flex-wrap items-center justify-center">
    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-0">
      <Image
        src="/a.jpg"
        alt="a"
        width={480}
        height={450}
        priority
      />
      <Image
        src="/e.jpg"
        alt="e"
        width={480}
        height={450}
        priority
      />
      <Image
        src="/i.jpg"
        alt="i"
        width={480}
        height={450}
        priority
      />
      <Image
        src="/o.jpg"
        alt="o"
        width={480}
        height={450}
        priority
      />
      <Image
        src="/u.jpg"
        alt="u"
        width={480}
        height={450}
        priority
      />
      <Image
        src="/y.jpg"
        alt="y"
        width={480}
        height={450}
        priority
      />
    </div>
    </div>
  </div>

  {/* Content Section 1 */}
  <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade-left animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          The creation of Vowels Island began with a vision to design an educational game specifically tailored for children with dyslexia. The core objective was to enhance reading and writing skills through engaging, interactive gameplay. Early on, we incorporated speech recognition technology to aid children with pronunciation and reading exercises, providing real-time feedback and support.
          <br/> <br/>
          The game was designed with a variety of motivating elements, including hints and rewards, to keep children engaged and encouraged throughout their learning journey.
      </div>
      <div className="animate-fade-right animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
        <div className="font-bold text-xs tracking-[.15em]">
          GAME DEV & RESEARCH
        </div>
        <div className="text-md font-light pt-1">
          Design Thinking<br />Game Design<br />Game Development<br />Generative AI<br />Unity3D, C#
        </div>
        <div className="pt-6 md:pt-10 font-bold text-xs tracking-[.15em]">
          TECHNOLOGIES
        </div>
        <div className="flex flex-row pt-2">
          <GithubIcon height={18} width={18} theme={theme} />
          <Image
            src="/unity.png"
            alt="unity"
            width={20}
            height={20}
            priority
            className="ml-3"
          />
          <Image
            src="/vs.png"
            alt="vs"
            width={20}
            height={20}
            priority
            className="ml-3"
          />
          <Image
            src="/csharp.webp"
            alt="vs"
            width={24}
            height={24}
            priority
            className="ml-3"
          />
          <Image
            src="/gpt.png"
            alt="vs"
            width={19}
            height={19}
            priority
            className="ml-3"
          />
        </div>
      </div>
    </div>

  {/* Content Section 2 */}
  <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
          Challenge
        </div>
        <div className="text-4xl md:text-5xl font-bold pt-1  text-right">
          Ed-tech
        </div>
      </div>

      <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
          Designing an educational tool that effectively meets the needs of children with dyslexia required a multifaceted approach. The key challenges included ensuring that the game could address pronunciation difficulties, offer tailored learning experiences, and keep children motivated throughout their learning journey.
          <br/> <br/>
          Traditional educational tools often lack the adaptability and engagement necessary to meet these specific needs, making it essential to create a solution that was both dynamic and user-friendly.
      </div>
      
    </div>
  </div>

  {/* Content Section 3 */}
  <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
      <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
          <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
            Solution
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-1 text-right">
            Vowels Island
          </div>
        </div>
      <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
          To address these challenges, the game was engineered with several advanced features. Since enhancing the learning experience was key, we focused on integrating advanced features to meet the specific needs of children with dyslexia.
          <br/> <br/>
          Instead of following a conventional approach, we designed the game with a structure driven by these four core elements:
          <br /> <br />
          01. Speech Recognition Technology
          <br />
          02. Interactive Gameplay
          <br />
          03. Motivational Elements (hints, rewards, etc)
          <br />
          04. Tailored Learning Experiences using GenAI (OpenAI API plugin)
      </div>
      
    </div>
  </div>

  {/* Web App Section */}
  <div className="min-h-96 pt-12 md:pt-48">
    <div className="pl-6 md:pl-48 flex flex-col pb-10 md:pb-20">
      <h1 className="text-xl font-light text-black pb-2 md:pb-4">Web App</h1>
      <h2 className="pb-2 text-2xl md:text-4xl font-semibold text-black">
        PainCare
      </h2>
      <p className="text-2xl md:text-4xl font-semibold opacity-70 text-rose-600">
        Women&apos;s Healthcare
      </p>
    </div>
    
  {/* PainCare Image Section */}
  <div className="min-h-96 bg-white bg-cover bg-center flex flex-wrap items-center justify-center">
    <Image
      src="/paincare2.png"
      alt="paincare"
      width={1000}
      height={500}
      priority
    />
  </div>
  </div>

  {/* PainCare Content Section */}
  <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade-left animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          The creation of PainCare began with a vision to provide a supportive, comprehensive tool for individuals managing endometriosis. The core objective was to empower users by offering personalized pain tracking and symptom management, enhancing their quality of life through an intuitive and user-friendly platform.
          <br/> <br/>
          Early on, we integrated AI-driven analytics to help users identify patterns in their symptoms and triggers, providing actionable insights and recommendations for better pain management.
      </div>
      <div className="animate-fade-right animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em]">
          SDE & DATA ANALYSIS
        </div>
        <div className="text-md md:text-lg font-light pt-1">
        Design Thinking <br/> User Experience <br/> Software Development <br/> Data Analytics <br/> Data Visualization
        </div>
        <div className="mt-8 text-xs md:text-sm font-bold tracking-[.15em]">
          TECHNOLOGIES
        </div>
        <div className="flex flex-wrap items-center pt-2">
        <Link href="https://github.com">
            <GithubIcon height={18} width={18} theme={theme}/></Link>
            <div className="pl-2">
              <Link href="https://spring.io">
              <Image
                src="/spring.svg"
                alt="spring"
                width={21}
                height={21}
                priority
              /></Link>
              </div>
              <div className="pl-2">
              <Link href="https://nextjs.org">
              <Image
                src="/nextjs.svg"
                alt="next"
                width={22}
                height={22}
                priority
              /></Link>
              </div>
              <div className="pl-2">
              <Link href="https://threejs.org">
              <Image
                src="/threejs.svg"
                alt="threejs"
                width={20}
                height={20}
                priority
              /></Link></div>
              <div className="pl-2">
              <Link href="https://reactjs.org">
              <Image
                src="/react.svg"
                alt="react"
                width={20}
                height={20}
                priority
              /></Link></div>
              <div className="pl-2">
              <Link href="https://tailwindcss.com">
              <Image
                src="/tailwindcss.svg"
                alt="twcss"
                width={22}
                height={22}
                priority
              /></Link></div>
              <div className="pl-2">
              <Link href="https://docker.com">
              <Image
                src="/docker.svg"
                alt="docker"
                width={20}
                height={20}
                priority/></Link></div>
              <div className="pl-2">
              <Link href="https://postgresql.org">
              <Image
                src="/postgresql.svg"
                alt="postgresql"
                width={20}
                height={20}
                priority/></Link></div>
        </div>
    </div>
  </div>

  <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
          Challenge
        </div>
        <div className="text-4xl md:text-5xl font-bold pt-1 text-right">
        Patient Support
        </div>
      </div>

      <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
        Designing a web application that effectively addresses the complex and individualistic nature of endometriosis required a holistic approach. The key challenges included ensuring that the app could cater to the diverse experiences of those with endometriosis, provide accurate symptom tracking, and offer personalized insights to assist in pain management.
        <br/> <br/>
        Traditional healthcare tools often lack the customization and real-time support necessary to meet these specific needs, making it essential to create a solution that was both adaptable and user-focused.
        </div>
      
    </div>
  </div>
  <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
        Solution
        </div>
        <div className="text-4xl md:text-5xl font-bold pt-1 text-right">
        PainCare
        </div>
      </div>

      <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
      PainCare offers a personalized approach to managing endometriosis by providing customizable pain and symptom tracking, AI-driven insights, and treatment management tools. With features like medication tracking and tailored lifestyle recommendations, the app empowers users to better understand their symptoms and make informed health decisions.
        <br/><br/>
        PainCare was built using a robust tech stack to provide an efficient and scalable solution. The backend is powered by Spring, while the frontend uses Next.js, React, and Three.js for interactive visualizations, with Tailwind CSS ensuring responsive design. PostgreSQL was implemented for data storage, and Docker was used for containerization, streamlining deployment and ensuring consistency across environments. Version control was managed via GitHub, supporting collaboration and continuous development.
        </div>
    </div>
  </div>

  <div className="min-h-96 pt-12 md:pt-48">
    <div className="pl-6 md:pl-48 flex flex-col pb-10 md:pb-20">
      <h1 className="text-xl md:text-lg font-light text-black pb-2 md:pb-4">Fun</h1>
        <h2 className="pb-2 text-2xl md:text-4xl font-semibold text-black">
          RustOS
        </h2>
        <p className='text-2xl md:text-4xl font-semibold opacity-70 text-sky-900'>
          Mini Operating System Kernel
        </p>
    </div>

    <div className="min-h-96 bg-[url('/rust.jpg')]">
      <div className="bg-sky-950 bh-full bg-opacity-60 pt-10 md:pt-10 px-6 md:px-10 pb-10 md:pb-10">
        <div className="flex justify-center items-center py-10 md:py-10 opacity-70">
          <Image
            src="/rust.png"
            alt="rust"
            className="rounded-xl opacity-75 drop-shadow"
            height={700}
            width={700}
            priority/>
        </div>
      </div>
    </div>
  </div>
    <div className="min-h-96 bg-zinc-100 flex flex-col md:flex-row justify-center items-center px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-60 text-black">
        <div className="animate-fade-left animate-ease-linear w-full md:w-2/3 px-6 md:px-20 py-6 md:py-10 text-xl font-light">
          The development of the Mini Operating System Kernel began as an exploration into low-level systems programming, with the primary goal of designing a lightweight kernel that could serve as the foundation for more complex features. In its initial version, the kernel was able to print a message to the terminal, showcasing the basic bootstrapping of an operating system and establishing a proof of concept for further enhancements.
        <br/> <br/>
          Although initially minimalistic, the project laid the groundwork for future implementations, such as memory management, process scheduling, and system calls, to gradually transform it into a functional and modular operating system.
        </div>
        <div className="animate-fade-right animate-ease-linear w-full md:w-1/4 px-6 md:pr-20 py-6 md:py-10">
          <div className="text-xs md:text-sm font-bold tracking-[.15em]">
            SOFTWARE ENGINEERING
          </div>
          <div className="text-md md:text-lg font-light pt-1">
            Low-Level Development <br/> Kernel Bootstrapping <br/> Scalability <br/> Systems Programming
          </div>
          <div className="mt-8 text-xs md:text-sm font-bold tracking-[.15em]">
            TECHNOLOGIES
          </div>
          <div className="flex flex-wrap items-center pt-2">
            <Link href="https://github.com">
            <GithubIcon height={18} width={18} theme={theme}/></Link>
            <div className="pl-2">
              <Link href="https://rust-lang.org">
              <Image
                src="/rust_logo.svg"
                alt="rust"
                width={21}
                height={21}
                priority
              /></Link>
              </div>
              <div className="pl-2">
              <Link href="https://rust-lang.org">
              <Image
                src="/utm.png"
                alt="utm"
                width={22}
                height={22}
                priority
              /></Link>
              </div>
          </div></div>
      </div>
  <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
          Challenge
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-1 text-right">
          Building
          </div>
        </div>
        <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
        Building an OS kernel from scratch poses unique challenges, particularly in ensuring correct hardware interactions and setting up a system that can eventually handle complex tasks like memory management and process scheduling. Each step ensured seamless hardware interaction and provided a foundation for future features.
        <br/> <br/>
        01. Bare Metal File Creation<br/>
        02. Bootloader Implementation<br/>
        03. Message Encoding<br/>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-zinc-100 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full md:w-1/3 flex flex-col items-end pb-4 pr-10">
        <div className="text-xs md:text-sm font-bold tracking-[.15em] text-right">
          Solution
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-1 text-right">
            Mini OS Kernel
          </div>
        </div>
        <div className="w-full md:w-2/3 text-xl md:text-xl font-light">
        The initial version of the Mini Operating System Kernel successfully established basic terminal communication. Written in Rust, it was designed with modularity in mind, allowing for the seamless addition of more advanced system features in future iterations, such as memory handling and multitasking. By completing these first crucial steps, the project created a robust foundation for building a more advanced operating system.
        </div>
      </div>
      </div>
      </div>
      <div id="sec-cred">
      <div className="flex flex-col min-h-96 p-6 md:p-24 items-start text-left px-20 py-96 bottom-0">
        <div className="text-6xl font-bold text-left pt-48">Thank you for stopping by!</div>
        <div className="text-xl font-light opacity-50 text-left pt-6 pl-2 pb-20">imanebenrazzouk@ieee.org</div>
      </div>

      </div>

      </div>
    </main>
  );
}
