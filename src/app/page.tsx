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
      } else if (isElementInView(sectionProj)) {
        setSection('proj');
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
    <main className={`flex min-h-screen flex-col ${theme === "dark" ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`flex flex-row ${theme === "dark" ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <VerticalBanner theme={theme} loaderVisible={loaderVisible} section={sectionName}/>

      <div id='dark-section' className="flex min-h-screen flex-col p-24 items-start">
      <div className="min-h-96 pt-24 px-40">
        <div className="text-left">
          <div className="text-[#ffffff]/50 font-light pb-8">Imane Benrazzouk</div>
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
      <div className={`min-h-96 pt-96  ${theme === "dark" ? 'bg-black text-black' : 'bg-white text-black'}`} >
      <div className=" pl-48 flex flex-col pb-20">
        <h1 className="text-xl font-light text-black pb-4">2024</h1>
        <h2 className="pb-2 text-4xl font-semibold text-black">
          Bank Al Maghrib
        </h2>
        <p className={`text-4xl font-semibold  ${theme === "dark" ? 'text-purple-100 opacity-40' : 'text-purple-950 opacity-20'}`}>
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
        <div className="animate-fade animate-ease-linear w-2/3 px-20 py-10 text-xl font-light">
        For the past summer, I have been collaborating with the Data Analytics Department on an internal tool for anomaly flagging. This project involved developing and optimizing algorithms to enhance data quality and accuracy across the organization.
        <br/> <br/>
        The nature of the work is confidential, but if you want to learn more about this experience, feel free to reach out.
        </div>
        <div className="animate-fade animate-ease-linear w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SWE & RESEARCH ASSISTANT
          </div>
          <div className="text-md font-light pt-1">
            Data Science <br/> Machine Learning <br/> Software Development
          </div>
          <div className="pt-10 font-bold text-xs tracking-[.15em]">
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
      <div id='light-section' className="min-h-96 bg-[url('/ft_bg.png')]">
        <div className="bg-red-300 bg-opacity-60 pt-10 px-10 pb-40">
        <div className="flex justify-end items-start pb-96 opacity-70">
          <Image
            src="/FTname.png"
            alt="ft"
            width={200}
            height={50}
          />
          </div>
          </div>
      </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        <div className="animate-fade-left animate-ease-linear w-2/3 px-20 py-10 text-xl font-light">
        My internship at FeverTokens, a prominent French company specializing in Blockchain technology, provided me with an in-depth experience in implementing crucial features to enhance the platform&apos;s functionality.
        <br/>Over a span of four months, I focused on three pivotal tasks that were central to improving security, customization, and data collection.
        <br/> <br/>
        I made meaningful contributions to the team&apos;s success by implementing solutions that truly made an impact in a fast-paced, collaborative environment. This hands-on experience sharpened my technical skills and reinforced my ability to thrive in a dynamic, high-pressure setting.
        </div>
        <div className="animate-fade-right animate-ease-linear w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SOFTWARE DEVELOPEMENT ENGINEER
          </div>
          <div className="text-md font-light pt-1">
            Software Development <br/> Blockchain <br/> Cloud Infrastructure <br/> APIs
          </div>
          <div className="pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
          <Link href="https://app.fevertokens.io/sign-in"><span className="underline underline-offset-1">View Website</span></Link>
          </div></div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
            Feature #1
          </div>
          <div className="text-4xl font-bold pt-1">
            Access Control
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        The first major task involved implementing advanced access control mechanisms to enhance user permission management on the FeverTokens platform. The feature focused on refining access control by setting specific limits on collaborator access, varying between different subscription plans. Middleware API integration played a key role in enforcing these restrictions, ensuring that user permissions aligned with the plan&apos;s guidelines.
        </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Feature #2
          </div>
          <div className="text-4xl font-bold pt-1">
            Emails Whitelist
          </div>
      </div>
      <div className="w-2/3 px-10 py-10 text-xl font-light">
      Our initial approach centered around crafting an email-based whitelist functionality that would simplify user addition while bolstering the platform&apos;s security. We explored various concepts to ensure a seamless process, ultimately settling on an automated system that managed access with minimal user intervention. The design remained clean and efficient, with thoughtful touches to keep everything intuitive. The result? A streamlined, secure platform where adding users became effortless, enhancing collaboration and safeguarding sensitive data with ease.
      </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Feature #3
          </div>
          <div className="text-4xl font-bold pt-1">
            Forms Builder
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        We set out to create a Forms Builder that would give users the freedom to customize and craft their own data collection forms effortlessly. After exploring various design approaches, we landed on a drag-and-drop interface that struck the right balance between usability and versatility. The focus was on delivering a tool that was both intuitive and powerful, allowing users to tailor their forms to meet specific needs with minimal effort. The outcome was a seamless, user-friendly Forms Builder that made data collection customization straightforward and accessible.
        </div>
      </div>

      <div className="min-h-96 pt-48 bg-white" >
      <div className=" pl-48 flex flex-col pb-20">
        <h1 className="text-xl font-light text-black pb-4">2021</h1>
        <h2 className="pb-2 text-4xl font-semibold text-black">
          Genazure
        </h2>
        <p className='text-4xl font-semibold text-teal-500 opacity-70'>
          Bioinformatics and E-Medicine
        </p>
      </div>
      <div id='dark-cov-bg' className="min-h-96 bg-gray-950">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/cov3.png"
            alt="covmodel"
            width={1000}
            height={300}
          />
          </div>
      </div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        <div className="animate-fade-left animate-ease-linear w-2/3 px-20 py-10 text-xl font-light">
        Our journey with the Covid infection recognition project began with a deep dive into a study from October 2020, which served as the foundation for building a robust Deep Learning model. The goal was clear: create a model capable of accurately identifying Covid infection in alveolar stem cells. We experimented with various approaches and ultimately succeeded in enhancing the model&apos;s accuracy from 68.96% to 79.31%. This improvement was achieved by expanding the dataset and fine-tuning the algorithms to better capture the nuances in the data.
        <br/> <br/>
        The final step was to bring this model to life in a user-friendly interface. Using the Streamlit Framework, we developed a GUI that made the system incredibly accessible. The result was a sleek, interactive platform where users could simply drag and drop their input images, making complex bioinformatics more approachable for everyone involved.
        </div>
        <div className="animate-fade-right animate-ease-linear w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            RESEARCH ASSISTANT </div>
          <div className="text-md font-light pt-1">
            Software Development <br/> Data Science <br/> Machine Learning <br/> Bioinformatics
          </div>
          <div className="pt-10 font-bold text-xs tracking-[.15em]">
            LINK
          </div>
          <div className="text-md font-light flex flex-row items-center pt-1">
          <Link href="https://github.com/yurus0/Covmodel"><span className="underline underline-offset-1">View Work</span></Link>
          </div>
      </div>
      </div>

      </div>
      <div id='sec-proj'>
      <div className="min-h-96 pl-48 flex flex-col justify-end items-start bg-white" >
      <div className="pb-10 flex flex-col">
        <h1 className="text-xl font-light text-black pb-4">Research</h1>
        <h2 className="pb-4 text-4xl font-semibold text-black">
          Vowels Island{" "}
        </h2>
        <p className="text-4xl font-semibold opacity-50 text-blue-700">
          Vowels game for kids with Dyslexia.
        </p>
      </div>
      </div>
      <div id='dark-cov-bg' className="min-h-96 bg-gray-950 flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              src="/a.jpg"
              alt="a"
              width={480}
              height={450}
            />
            <Image
              src="/e.jpg"
              alt="e"
              width={480}
              height={450}
            />
            <Image
              src="/i.jpg"
              alt="i"
              width={480}
              height={450}
            />
          </div>

          <div className="flex flex-row">
            <Image
              src="/o.jpg"
              alt="o"
              width={480}
              height={450}
            />
            <Image
              src="/u.jpg"
              alt="u"
              width={480}
              height={450}
            />
            <Image
              src="/y.jpg"
              alt="y"
              width={480}
              height={450}
            />
          </div>
        </div>
      
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        
        <div className="z-index w-2/3 px-20 py-10 text-xl font-light">
        The creation of Vowels Island began with a vision to design an educational game specifically tailored for children with dyslexia. The core objective was to enhance reading and writing skills through engaging, interactive gameplay. Early on, we incorporated speech recognition technology to aid children with pronunciation and reading exercises, providing real-time feedback and support.
        <br/> <br/>
        The game was designed with a variety of motivating elements, including hints and rewards, to keep children engaged and encouraged throughout their learning journey.
        </div>
        <div className="z-index w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            GAME DEV & RESEARCH
          </div>
          <div className="text-md font-light pt-1">
            Design Thinking <br/> Game Design <br/> Game Developement <br/> Generative AI <br/> Unity3D, C#
          </div><div className="pt-10 font-bold text-xs tracking-[.15em]">
            TECHNOLOGIES
          </div>
          <div className="text-md font-light flex flex-row items-center pt-2">
            <GithubIcon height={18} width={18} theme="light"/>
            <div className="pl-2">
              <Image
                src="/unity.png"
                alt="unity"
                width={20}
                height={20}
              /></div>
              <div className="pl-2">
              <Image
                src="/vs.png"
                alt="vs"
                width={20}
                height={20}
              /></div>
              <div className="pl-2">
              <Image
                src="/csharp.webp"
                alt="vs"
                width={24}
                height={24}
              /></div>
              <div className="pl-2">
              <Image
                src="/gpt.png"
                alt="vs"
                width={19}
                height={19}
              /></div>
          </div></div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Challenge
          </div>
          <div className="text-4xl font-bold pt-1">
            Ed-tech
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        Designing an educational tool that effectively meets the needs of children with dyslexia required a multifaceted approach. The key challenges included ensuring that the game could address pronunciation difficulties, offer tailored learning experiences, and keep children motivated throughout their learning journey. 
        <br/> <br/>
        Traditional educational tools often lack the adaptability and engagement necessary to meet these specific needs, making it essential to create a solution that was both dynamic and user-friendly.
        </div>
      </div>

      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Solution
          </div>
          <div className="text-4xl font-bold pt-1">
            Vowels Island
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        To address these challenges, the game was engineered with several advanced features. Since enhancing the learning experience was key, we focused on integrating advanced features to meet the specific needs of children with dyslexia.<br/>Instead of following a conventional approach, we designed the game with a structure driven by these four core elements:
        <br/> <br/>
        01. Speech Recognition Technology<br/>
        02. Interactive Gameplay<br/>
        03. Motivational Elements {"("}hints, rewards, etc{")"}<br/>
        04. Tailored Learning Experiences using GenAI {"("}OpenAI API plugin{")"} <br/>
        </div>
      </div>
      <div className="min-h-96 pl-48 flex flex-col justify-end items-start bg-white" >
      <div className="pb-10 flex flex-col">
        <h1 className="text-xl font-light text-black pb-4">Web App</h1>
        <h2 className="pb-4 text-4xl font-semibold text-black">
          PainCare{" "}
        </h2>
        <p className="text-4xl font-semibold opacity-50 text-rose-600">
          Women&apos;s Healthcare
        </p>
      </div>
      </div>
      <div className="min-h-96 bg-white flex flex-row justify-center items-center">
        <img
          src="/paincare2.png"
          alt="paincare"
          width={1000}
          height={500}
          />
        {/*<Spline
          scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode"
        />*/}
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-center px-10 pt-10 pb-60 text-black ">
        
        <div className="z-index w-2/3 px-20 py-10 text-xl font-light">
        The creation of PainCare began with a vision to provide a supportive, comprehensive tool for individuals managing endometriosis. The core objective was to empower users by offering personalized pain tracking and symptom management, enhancing their quality of life through an intuitive and user-friendly platform. Early on, we integrated AI-driven analytics to help users identify patterns in their symptoms and triggers, providing actionable insights and recommendations for better pain management.
        <br/> <br/>
        The app was designed with a range of supportive features, including customizable pain logs, medication tracking, and lifestyle tips, to keep users engaged and informed throughout their health journey.
        </div>
        <div className="z-index w-1/4 pr-20 py-10">
          <div className="font-bold text-xs tracking-[.15em]">
            SDE & DATA ANALYSIS
          </div>
          <div className="text-md font-light pt-1">
            Design Thinking <br/> User Experience <br/> Software Development <br/> Data Analytics <br/> Data Visualization
          </div><div className="pt-10 font-bold text-xs tracking-[.15em]">
          TECHNOLOGIES
          </div>
          <div className="text-md font-light flex flex-row items-center pt-2">
            <Link href="https://github.com">
            <GithubIcon height={18} width={18} theme="light"/></Link>
            <div className="pl-2">
              <Link href="https://spring.io">
              <Image
                src="/spring.svg"
                alt="spring"
                width={21}
                height={21}
              /></Link>
              </div>
              <div className="pl-2">
              <Link href="https://nextjs.org">
              <Image
                src="/nextjs.svg"
                alt="next"
                width={22}
                height={22}
              /></Link>
              </div>
              <div className="pl-2">
              <Link href="https://threejs.org">
              <Image
                src="/threejs.svg"
                alt="threejs"
                width={20}
                height={20}
              /></Link></div>
              <div className="pl-2">
              <Link href="https://reactjs.org">
              <Image
                src="/react.svg"
                alt="react"
                width={20}
                height={20}
              /></Link></div>
              <div className="pl-2">
              <Link href="https://tailwindcss.com">
              <Image
                src="/tailwindcss.svg"
                alt="twcss"
                width={22}
                height={22}
              /></Link></div>
              <div className="pl-2">
              <Link href="https://docker.com">
              <Image
                src="/docker.svg"
                alt="docker"
                width={20}
                height={20}/></Link></div>
              <div className="pl-2">
              <Link href="https://postgresql.org">
              <Image
                src="/postgresql.svg"
                alt="postgresql"
                width={20}
                height={20}/></Link></div>

              <div className="pl-2">
              <Link href="https://postgresql.org">
              hh
              <Image
                src="/square.svg"
                alt="postgresql"
                width={20}
                height={20}/></Link></div>

          </div></div>
      </div>
      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Challenge
          </div>
          <div className="text-4xl font-bold pt-1">
          Patient Support
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        Designing a web application that effectively addresses the complex and individualistic nature of endometriosis required a holistic approach. The key challenges included ensuring that the app could cater to the diverse experiences of those with endometriosis, provide accurate symptom tracking, and offer personalized insights to assist in pain management.
        <br/> <br/>
        Traditional healthcare tools often lack the customization and real-time support necessary to meet these specific needs, making it essential to create a solution that was both adaptable and user-focused.
        </div>
      </div>

      <div className="min-h-96 bg-zinc-100 flex flex-row justify-center items-start px-10 pt-10 pb-60 text-black ">
      <div className="w-1/4 pl-40 py-10">
          <div className="font-bold text-md tracking-[.15em]">
          Solution
          </div>
          <div className="text-4xl font-bold pt-1">
            PainCare
          </div>
        </div>
        <div className="w-2/3 px-10 py-10 text-xl font-light">
        PainCare offers a personalized approach to managing endometriosis by providing customizable pain and symptom tracking, AI-driven insights, and treatment management tools. With features like medication tracking and tailored lifestyle recommendations, the app empowers users to better understand their symptoms and make informed health decisions.
        <br/><br/>
        PainCare was built using a robust tech stack to provide an efficient and scalable solution. The backend is powered by Spring, while the frontend uses Next.js, React, and Three.js for interactive visualizations, with Tailwind CSS ensuring responsive design. PostgreSQL was implemented for data storage, and Docker was used for containerization, streamlining deployment and ensuring consistency across environments. Version control was managed via GitHub, supporting collaboration and continuous development.
        </div>
      </div>

      </div>

      </div>
      <div className="min-h-96 flex flex-col justify-center text-left pl-48 py-48 bottom-0">
        <div className="text-6xl font-bold text-left">Thank you for stopping by!</div>
        <div className="text-xl font-light opacity-50 text-left pt-6 pl-2">imanebenrazzouk@ieee.org</div>
      </div>
    </main>
  );
}
