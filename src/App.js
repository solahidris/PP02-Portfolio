import "./App.css";
import BlobAnimation from "./components/BlobAnimation";
import { SiGithub, SiLinkedin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiStackoverflow } from "react-icons/si";
import macbookpic from "./assets/macbookpic.jpg";
import coffeeshop from "./assets/coffeeshop.jpg";
import weatherapp from "./assets/weatherapp.jpeg";
import recipeapp from "./assets/recipeapp.jpeg";
import calculatorapp from "./assets/calculatorapp.jpeg";
import todoapp from "./assets/todoapp.jpeg";
import quoteapp from "./assets/quoteapp.png";

import RightMenu from "./components/RightMenu";
import React, { useRef } from 'react';
import { MapIcon, InboxIcon, PhoneIcon } from "@heroicons/react/20/solid";
import contactpic from "./assets/contactpic.jpg";

import { motion } from "framer-motion";


function App() {

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref === 'homeDiv' && aboutMeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'aboutDiv' && projectsRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'projectsDiv' && contactRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'contactDiv' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

      const contactSectionHandler = (value) => {
        if (value === "phoneSection") {
          window.location.href = "tel:+60127710626";
        } else if (value === "emailSection") {
          window.open(
            `mailto:${encodeURIComponent(
              "solah.eth@gmail.com"
            )}?subject=${encodeURIComponent(
              "Work Opportunity"
            )}&body=${encodeURIComponent(
              "Hello Sol, I saw your website and wanted to reach out."
            )}`
          );
        }
      };
  
  

  return (
    <div className="bg-gray-800 min-h-[100vh]">

          {/* Header Top Menu */}
        <div ref={homeRef} className="flex justify-center py-7 px-10 lg:px-20 bg-gray-800 drop-shadow-xl">
          <RightMenu scrollToSection={scrollToSection}/>
        </div>

          {/* INTRO SECTION */}
        <div className="px-[2rem]">

          <div className="m-4 flex flex-col lg:flex-row">
              {/* Blob Picture */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="lg:w-[40%] lg:h-[40%] lg:ml-[10%] mx-[2.2rem] lg:mx-0">
              <BlobAnimation className="bg-red-700 lg:w-[5rem] lg:h-[5rem]"/>
            </motion.div>
              {/* Title and Intro */}
            <div className="lg:ml-10 flex flex-col justify-center text-white font-mono">
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <p className="text-[2.2rem] lg:text-[3.6rem] lg:text-left text-center font-bold">Front-End <a href="#" class="text-sky-300 pointer-events-none">React</a> Developer 👋🏻</p>
              </motion.div>
              <p className="text-[0.9rem] lg:mr-[23%] lg:text-left text-justify pt-8 pb-10">Hi, I'm Sol. A passionate self-taught Front-end React Developer based in Kuala Lumpur, Malaysia. 📍</p>
              <div className="flex gap-x-4 justify-center lg:justify-start">
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://github.com/solahidris"><SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-yellow-400"/></a></motion.button>
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solahuddinidris/"><SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-blue-500"/></a></motion.button>
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
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-center gap-[1.5rem] lg:gap-x-[2rem] lg:ml-[4rem] my-[4.5rem] text-white">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><SiHtml5 className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-orange-700 to-orange-500 drop-shadow-md"/></motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><SiCss3 className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow-md"/></motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><SiJavascript className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-300 drop-shadow-md"/></motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><SiReact className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-cyan-700 to-cyan-500 drop-shadow-md"/></motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><SiTailwindcss className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-300 drop-shadow-md"/></motion.button>
            </div>
            </motion.div>

           </div>  
        </div>

        {/* ABOUT ME SECTION */}
      <div ref={aboutMeRef} className="px-[2rem] py-[5rem] lg:px-[8rem] bg-slate-700 drop-shadow-xl">
        
            {/* Macbook Pic lg:mt-[8rem] */}
          <div className="flex flex-col lg:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-[0rem] lg:mx-[1rem] lg:mt-[-2.5rem] lg:w-[100%] lg:h-[100%] w-[90%] h:[90%] self-center"
            >
             <img src={macbookpic} className="rounded-2xl" alt="macpic" />
            </motion.div>
            <div className="lg:py-[2.5rem]">
              {/* Title */}
              <div className="flex justify-center">
                <p className="lg:mt-0 mt-[2.5rem] tracking-widest font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">ABOUT ME</p>
              </div>
              {/* Employment History */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="lg:px-[4rem] bg-slate-800/20 mx-[1rem] px-[1.5rem] py-[1rem] mt-[2rem] rounded-xl overflow-y-auto h-[30rem] lg:h-[100%]">
                  <p className="text-left font-mono font-bold text-[1.5rem] text-white">An ex-<a href="#" class="text-yellow-200 pointer-events-none">Google</a> & <a href="#" class="text-sky-500 pointer-events-none">Facebook</a> Employee finally becomes a Programmer</p>
                  <p className="text-justify mt-[2rem] font-mono text-[0.8rem] text-gray-100/80 ">As a self-taught Junior Front-End Developer, I now have an arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and still coding & learning daily. I aim to create a meaningful app to ease everyone's lives.</p>
                  <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Previously, in <a href="#" class="text-yellow-200 pointer-events-none">Google</a>, I was positioned as an <a href="#" class="text-yellow-200 pointer-events-none">App Review Analyst</a> and <a href="#" class="text-yellow-200 pointer-events-none">Social Listening</a> team. Meanwhile, in <a href="#" class="text-sky-500 pointer-events-none">Facebook</a>, I was doing <a href="#" class="text-sky-500 pointer-events-none">Customer Support</a> via Email, Live Chat & Calls. Both FAANG companies definitely taught me a lot about IT and gave me the drive to chase my dream in becoming a programmer.</p>
                  <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Other than those places, I've worked at <a href="#" class="text-green-500 pointer-events-none">ATOS as a L1 Tech Support</a> supporting the Asia Region. And my interest in coding started during my stay at a local startup called <a href="#" class="text-rose-500 pointer-events-none">WinApp in iOS Development</a> using Swift and XCode.</p>
                  <p className="text-justify mt-[1rem] font-mono text-[0.8rem] text-gray-100/80">Although graduating with a <a href="#" class="text-lime-200 pointer-events-none">Mechanical Engineering Degree</a> from Wichita State in Kansas USA, I do believe programming is my passion because my love of building. With that being said, please give me a chance to perform and contribute in your company. I truly believe I can make a difference and give a positive impact.</p>
                </div>
              </motion.div>
            </div>
        </div>
      </div>

        {/* PROJECTS SECTION */}
      <div ref={projectsRef} className="px-[4rem] pt-[3.5rem] pb-[5rem] lg:px-[8rem] lg:pb-[8rem] bg-gray-800">

        <div className="flex justify-center">
              <p className="lg:mt-0 mt-[1rem] mb-[4rem] tracking-widest font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">PROJECTS</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem]">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://coffeeandkicks.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={coffeeshop} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col ">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">Coffee Shop</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[15%]">A local coffee shop with a reactive menu, navigation, reviews and social links</p>
              </div>
            </div>
          </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://project14-t1-weather-app-react.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={weatherapp} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">City Weather</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[20%] lg:py-[15%]">User can input a city and the app displays the weather via an external API</p>
              </div>
            </div>
          </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://project12-t1-recipe-app-react.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={recipeapp} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">Recipe App</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[15%]">Type in a food & the dynamic searchbar fetches recipes from an external API</p>
              </div>
            </div>
          </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://project16-t2-random-quote-generator.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={quoteapp} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">Quote App</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[15%]">Random Quote App via external API fetched using Axios recipes from an external API</p>
              </div>
            </div>
          </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://solah-calculator.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={calculatorapp} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">iCalculator</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[15%]">Recreating an iPhone calculator using React useState hook functionality</p>
              </div>
            </div>
          </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <a href="https://solah-todoapp.vercel.app/" target='_blank' className="w-[100%]">
            <div className="flex">
              <img src={todoapp} alt="" className="rounded-l-xl w-[40%]" />
              <div className="bg-slate-700/80 font-mono shadow-2xl rounded-r-xl px-4 py-2 lg:pt-4 lg:px-8 flex flex-col">
                <p className="text-[1.1rem] lg:text-[1.6rem] text-white font-bold underline underline-offset-8">To-Do List</p>
                <p className="text-[0.5rem] lg:text-[0.8rem] text-gray-100/80 self-center text-justified py-[15%]">A personal to-do list app to replace note taking apps for daily reminder tasks</p>
              </div>
            </div>
          </a>
          </motion.div>
        
        </div>

      </div>
      
         {/* CONTACT SECTION */}
      <div ref={contactRef} className="px-[4rem] py-[5rem] lg:px-[8rem] bg-slate-700 drop-shadow-xl lg:flex lg:flex-row">

        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mx-[0rem] lg:mx-[1rem] lg:w-[40%] lg:h-[40%] w-[90%] h:[90%] self-center">
          <img src={contactpic} className="rounded-2xl" alt="macpic" />
        </motion.div>

        <div className="lg:flex lg:flex-col lg:ml-[8rem] lg:mr-[10rem]">
          <div className="flex justify-center">
            <p className="lg:mt-0 mt-[3rem] mb-[3rem] tracking-widest font-mono font-bold text-white bg-blue-200/30 px-[1.5rem] py-[0.25rem] rounded-md">CONTACT</p>
          </div>
          <div className="flex justify-center">
            <p className="bg-blue-200/30 py-[0.75rem] px-[5rem] lg:px-[5rem] rounded-3xl text-center text-white font-mono font-bold tracking-widest text-[1rem] animate-pulse">Tap a Button 👇🏻</p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col justify-start lg:grid-cols-1 pt-[3rem] pb-[2rem]">
            
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex justify-start mb-4">
              <button value="emailSection" onClick={() => contactSectionHandler("emailSection")}>
                <div className="flex">
                  <InboxIcon className="text-white bg-gradient-to-r from-sky-600 to-sky-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                  <div className="flex flex-col ml-2">
                    <p className="text-white font-mono font-bold self-start mx-4 px-3 py-1 lg:text-[1.6rem] tracking-widest">Email</p>
                    <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] lg:text-[0.7rem] self-center mx-4 px-3 py-1 tracking-widest">solah.eth@gmail.com</p>
                  </div>
                </div>
              </button>
            </motion.button>
            
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex justify-start mb-4">
              <button value="phoneSection" onClick={() => contactSectionHandler("phoneSection")}>
                <div className="flex">
                  <PhoneIcon className="text-white bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                  <div className="flex flex-col ml-2">
                    <p className="text-white font-mono font-bold self-start mx-4 px-3 py-1 lg:text-[1.6rem] tracking-widest">Phone</p>
                    <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] lg:text-[0.7rem] self-center mx-4 px-3 py-1 tracking-widest">+60127710626</p>
                  </div>
                </div>
              </button>
            </motion.button>

            
            <div className="flex lg:justify-start">
              <MapIcon className="text-white bg-gradient-to-r from-amber-600 to-amber-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
              <div className="flex flex-col ml-2">
                <p className="text-white font-mono font-bold self-start mx-4 px-3 py-1 lg:text-[1.6rem] tracking-widest">Location</p>
                <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] self-center lg:text-[0.7rem] ml-4 px-3 py-1 tracking-widest">Kuala Lumpur, Malaysia 📍</p>
                <p className="text-white font-mono text-[0.6rem] self-start mx-4 px-3 py-1 tracking-widest lg:text-[0.5rem]">Okay with relocating ✅ </p>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
        
        {/* FOOTER SECTION */}
      <div className="px-[4rem] py-[3rem] lg:px-[8rem] bg-gray-800 drop-shadow-xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-[2rem]">
          <p className="text-white font-bold font-mono text-[0.7rem] text-center">Copyright © 2023. All rights are reserved</p>
          <div className="flex gap-x-4 justify-center">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://github.com/solahidris"><SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse text-white hover:text-yellow-400"/></a></motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solahuddinidris/"><SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] text-white animate-pulse hover:text-blue-500"/></a></motion.button>
          </div>
        </div>
      </div>
        

    </div>
  );
}

export default App;

