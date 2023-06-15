import "./App.css";
import BlobAnimation from "./components/BlobAnimation";
import { SiGithub, SiLinkedin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiStackoverflow } from "react-icons/si";
import macbookpic from "./assets/macbookpic.jpg";
import coffeeshop from "./assets/coffeeshop.jpg";
import weatherapp from "./assets/weatherapp.jpeg";
import recipeapp from "./assets/recipeapp.jpeg";
import calculatorapp from "./assets/calculatorapp.jpeg";
import todoapp from "./assets/todoapp.jpeg";

function App() {
  return (
    <div className="bg-gray-800 min-h-[100vh]">

        {/* Header Top Menu */}
      <div className="flex justify-between items-center py-7 px-10 lg:px-20 bg-gray-800 drop-shadow-xl">
        <p className="font-mono text-xs text-white">solah.dev</p>
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
            <p className="text-[2.2rem] lg:text-[3.6rem] lg:text-left text-center font-bold">Front-End <a href="#" class="text-sky-300 pointer-events-none">React</a> Developer 👋🏻</p>
            <p className="text-[0.9rem] lg:mr-[23%] lg:text-left text-justify pt-8 pb-10">Hi, I'm Sol. A passionate self-taught Front-end React Developer based in Kuala Lumpur, Malaysia. 📍</p>
            <div className="flex gap-x-4 justify-center lg:justify-start">
              <a target="_blank" rel="noreferrer" href="https://github.com/solahidris"><SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-yellow-400"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solahuddinidris/"><SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-blue-500"/></a>
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
          <div className="flex justify-center gap-[1.5rem] lg:gap-x-[2rem] lg:ml-[4rem] my-[4.5rem] text-white">
            <SiHtml5 className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-orange-700 to-orange-500 drop-shadow-md"/>
            <SiCss3 className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow-md"/>
            <SiJavascript className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-300 drop-shadow-md"/>
            <SiReact className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-cyan-700 to-cyan-500 drop-shadow-md"/>
            <SiTailwindcss className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-300 drop-shadow-md"/>
          </div>

        </div>

      </div>

        {/* ABOUT ME SECTION */}
      <div className="px-[2rem] py-[5rem] lg:px-[8rem] bg-slate-700">
        <div className="flex flex-col lg:flex-row-reverse">
            {/* Macbook Pic lg:mt-[8rem] */}
          <img src={macbookpic} className="mx-[0rem] lg:mx-[1rem] lg:mt-[-2.5grem] lg:w-[30%] lg:h-[30%] w-[90%] h:[90%] self-center rounded-2xl" alt="macpic" />
          <div className="lg:py-[2.5rem]">
              {/* Title */}
            <div className="flex justify-center">
              <p className="lg:mt-0 mt-[2.5rem] tracking-widest font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">ABOUT ME</p>
            </div>
              {/* Employment History */}
            <div className="lg:px-[4rem] bg-slate-800/20 mx-[1rem] px-[1.5rem] py-[1rem] mt-[2rem] rounded-xl overflow-y-auto h-[30rem] lg:h-[100%]">
              <p className="text-left font-mono font-bold text-[1.5rem] text-white">An ex-<a href="#" class="text-yellow-200 pointer-events-none">Google</a> & <a href="#" class="text-sky-500 pointer-events-none">Facebook</a> Employee finally becomes a Programmer</p>
              <p className="text-justify mt-[2rem] font-mono text-[0.8rem] text-gray-100/80 ">As a self-taught Junior Front-End Developer, I now have an arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and still coding & learning daily. I aim to create a meaningful app to ease everyone's lives.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Previously, in <a href="#" class="text-yellow-200 pointer-events-none">Google</a>, I was positioned as an <a href="#" class="text-yellow-200 pointer-events-none">App Review Analyst</a> and <a href="#" class="text-yellow-200 pointer-events-none">Social Listening</a> team. Meanwhile, in <a href="#" class="text-sky-500 pointer-events-none">Facebook</a>, I was doing <a href="#" class="text-sky-500 pointer-events-none">Customer Support</a> via Email, Live Chat & Calls. Both FAANG companies definitely taught me a lot about IT and gave me the drive to chase my dream in becoming a programmer.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Other than those places, I've worked at <a href="#" class="text-green-500 pointer-events-none">ATOS as a L1 Tech Support</a> supporting the Asia Region. And my interest in coding started during my stay at a local startup called <a href="#" class="text-rose-500 pointer-events-none">WinApp in iOS Development</a> using Swift and XCode.</p>
              <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Although graduating with a <a href="#" class="text-lime-200 pointer-events-none">Mechanical Engineering Degree</a> from Wichita State in Kansas USA, I do believe programming is my passion because my love of building. With that being said, please give me a chance to perform and contribute in your company. I truly believe I can make a difference and give a positive impact.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-gray-800">

        <div className="flex justify-center">
              <p className="lg:mt-0 mt-[2rem] tracking-widest font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">PROJECTS</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4">

          <div className="flex">
            <img src={coffeeshop} className="w-[40%] rounded-l-xl"/>
            <div className="bg-red-200 rounded-r-xl">
              <p>coffee shop-Deployed</p>
              <p>A local coffee shop with a reactive menu, navigation, reviews and social links</p>
            </div>
          </div>

          <div className="flex">
            <img src={weatherapp} className="w-[40%] rounded-l-xl"/>
            <div className="bg-red-200 rounded-r-xl">
              <p>city weather check app-notyet</p>
              <p>A local coffee shop with a reactive menu, navigation, reviews and social links</p>
            </div>
          </div>

          <div className="flex">
            <img src={recipeapp} className="w-[40%] rounded-l-xl"/>
            <div className="bg-red-200 rounded-r-xl">
              <p>recipe app-notyet</p>
              <p>A local coffee shop with a reactive menu, navigation, reviews and social links</p>
            </div>
          </div>

          <div className="flex">
            <img src={calculatorapp} className="w-[40%] rounded-l-xl"/>
            <div className="bg-red-200 rounded-r-xl">
              <p>calculator-deployed</p>
              <p>A local coffee shop with a reactive menu, navigation, reviews and social links</p>
            </div>
          </div>

          <div className="flex">
            <img src={todoapp} className="w-[40%] rounded-l-xl"/>
            <div className="bg-red-200 rounded-r-xl">
              <p>todo-list app-deployed</p>
              <p>A local coffee shop with a reactive menu, navigation, reviews and social links</p>
            </div>
          </div>

        </div>

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
