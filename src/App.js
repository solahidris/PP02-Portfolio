import logo from "./logo.svg";
import "./App.css";
import BlobAnimation from "./components/BlobAnimation";
import { SiGithub, SiLinkedin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiStackoverflow } from "react-icons/si";


function App() {
  return (
    <div className="bg-gray-800 min-h-[100vh]">

      <div className="flex justify-between items-center py-7 px-10 lg:px-20 bg-gray-800 drop-shadow-xl">
        <p className="font-mono text-xs text-white">solah.dev</p>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p className="font-mono text-lg text-white">Ξ</p> */}
        <button><p className="font-mono text-lg text-white">Ξ</p></button>
      </div>

        {/* Picture + Title + Intro + Tech Stack */}
      <div className="mx-[2rem]">

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
          <div className="flex flex-wrap mx-[5rem] my-10 justify-center gap-4 lg:gap-x-[4rem] text-white">
            <SiHtml5 className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-orange-700 hover:to-orange-500 drop-shadow-md"/>
            <SiCss3 className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 drop-shadow-md"/>
            <SiJavascript className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 drop-shadow-md"/>
            <SiReact className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-500 drop-shadow-md"/>
            <SiTailwindcss className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-gray-900 p-3.5 lg:p-4 rounded-2xl bg-gradient-to-r hover:from-sky-500 hover:to-sky-300 drop-shadow-md"/>
          </div>

        </div>

      </div>

      <div className="py-[30rem] text-gray-800">
          <p>more space</p>
      </div>
        

    </div>
  );
}

export default App;
