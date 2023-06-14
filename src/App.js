import logo from "./logo.svg";
import "./App.css";
import BlobAnimation from "./components/BlobAnimation";
import { SiGithub, SiLinkedin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiStackoverflow } from "react-icons/si";
import macbookpic from "./assets/macbookpic.jpg";

function App() {
  return (
    <div className="bg-gray-800 min-h-[100vh]">

        {/* Header Top Menu */}
      <div className="flex justify-between items-center py-7 px-10 lg:px-20 bg-gray-800 drop-shadow-xl">
        <p className="font-mono text-xs text-white">solah.dev</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button><p className="font-mono text-lg text-white">Ξ</p></button>
      </div>

        {/* INTRO SECTION */}
      <div className="px-[2rem]">

        <div className="m-4 flex flex-col lg:flex-row">
            {/* Blob Picture */}
          <div className="lg:w-[40%] lg:h-[40%] lg:ml-[10%] mx-[2.2rem] lg:mx-0">
            <BlobAnimation className="bg-red-700 lg:w-[5rem] lg:h-[5rem]"/>
          </div>
            {/* Title and Intro */}
          <div className="lg:ml-10 flex flex-col justify-center text-white font-mono">
            <p className="text-[2.2rem] lg:text-[3.6rem] lg:text-left text-center font-bold">Front-End React Developer 👋🏻</p>
            <p className="text-[0.9rem] lg:mr-[23%] lg:text-left text-center pt-8 pb-10">Hi, I'm Sol. A passionate self-taught Front-end React Developer based in Kuala Lumpur, Malaysia. 📍</p>
            <div className="flex gap-x-4 justify-center lg:justify-start">
              <SiGithub className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]"/>
              <SiLinkedin className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]"/>
            </div>
          </div>  
        </div>

          {/* Tech Stack Title + Icons */}
        <div className="flex flex-col lg:flex-row justify-center">

            {/* Tech Stack Title */}
          <div className="flex justify-center lg:self-center text-white pt-8 lg:pt-0">
            <div className="flex border-b-[0.15rem] lg:border-b-0 lg:border-r-[0.15rem] border-white pb-2 lg:pb-0 lg:pr-4">
              <p className="font-mono text-[0.9rem]">Tech Stack </p>
              <SiStackoverflow className="w-[1rem] h-[1rem] ml-[0.5rem]"/>
            </div>
          </div>

            {/* Icons */}
          <div className="flex flex-wrap mx-[4rem] my-10 justify-center gap-4 lg:gap-x-[4rem] text-white">
            <SiHtml5 className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-orange-700 hover:to-orange-500 drop-shadow-md"/>
            <SiCss3 className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 drop-shadow-md"/>
            <SiJavascript className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 drop-shadow-md"/>
            <SiReact className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-500 drop-shadow-md"/>
            <SiTailwindcss className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-sky-500 hover:to-sky-300 drop-shadow-md"/>
          </div>

        </div>

      </div>

        {/* ABOUT ME SECTION */}
      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-slate-700">
        <div className="flex flex-col lg:flex-row-reverse">
            {/* Macbook Pic */}
          <img src={macbookpic} className="rounded-2xl lg:w-[30%] lg:h-[30%] lg:self-center" alt="macpic" />
          <div className="lg:py-[2.5rem]">
              {/* Title */}
            <div className="flex justify-center">
              <p className="lg:mt-0 mt-[2.5rem] font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">ABOUT ME</p>
            </div>
              {/* Employment History */}
            <div className="lg:px-[4rem]">
              <p className="text-left mt-[1.5rem] font-mono font-bold text-[1.6rem] text-white">An ex-<strong class="underline decoration-yellow-400">Google</strong> & <strong class="underline decoration-blue-500">Facebook</strong> Employee that finally becomes a Programmer</p>
              <p className="text-justify mt-[2rem] font-mono text-[0.8rem] text-gray-100/80 ">As a self-taught Junior Front-End Developer, I now have an arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and still coding & learning daily. I aim to create a meaningful app to ease everyone's lives.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Although graduating with a <strong class="underline decoration-sky-500">Mechanical Engineering Degree</strong> from Wichita State in Kansas USA, I do believe programming is my passion because my love of building. With that being said, please give me a chance to perform and contribute in your company. I truly believe I can make a difference and give a positive impact.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Other than those places, I've worked at <strong class="underline decoration-green-500">ATOS as a L1 Tech Support</strong> supporting the Asia Region. And my interest in coding started during my stay at a local startup called <strong class="underline decoration-orange-500">WinApp in iOS Development</strong> using Swift and XCode.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Previously, in <strong class="underline decoration-yellow-400">Google</strong>, I was positioned as an <strong class="underline decoration-yellow-400">App Review Analyst</strong> and <strong class="underline decoration-yellow-400">Social Listening</strong> team. Meanwhile, in <strong class="underline decoration-blue-500">Facebook</strong>, I was doing <strong class="underline decoration-blue-500">Customer Support</strong> via Email, Live Chat & Calls. Both FAANG companies definitely taught me a lot about IT and gave me the drive to chase my dream in becoming a programmer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-gray-800">
        <p>Project Section</p>
      </div>

      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-slate-700">
        <p>Contact Section</p>
      </div>

      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-gray-800">
        <p>Footer Section</p>
        <p>Copyright © 2023. All rights are reserved</p>
      </div>



      <div className="py-[30rem] text-gray-800">
          <p>more space</p>
      </div>
        

    </div>
  );
}

export default App;
