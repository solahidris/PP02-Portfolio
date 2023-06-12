import logo from "./logo.svg";
import "./App.css";
import BlobAnimation from "./components/BlobAnimation";
import { SiGithub, SiLinkedin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiStackoverflow } from "react-icons/si";


function App() {
  return (
    <div className="bg-gray-800 min-h-[100vh]">

      <div className="flex justify-between items-center py-10 px-20 bg-gray-800 drop-shadow-xl">
        <p className="font-mono text-xs text-white">solah.dev</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-mono text-xs text-white">Ξ</p>
      </div>
      
      <div className="flex justify-center py-10 mx-[10rem]">
        <div className="min-w-[20rem] sm:min-w-[28rem]">
          <BlobAnimation />
        </div>
        <div className="text-white flex flex-col justify-center mx-10">
          <p className="text-[3rem] font-bold font-mono">Front-End React Developer 👋🏻</p>
          <p className="font-mono pt-8 pb-10">Hi, I'm Sol. A self-taught Front-end React Developer based in Kuala Lumpur, Malaysia. 📍</p>
          <div className="flex gap-x-4">
            <SiGithub className="w-[2rem] h-[2rem]"/>
            <SiLinkedin className="w-[2rem] h-[2rem]"/>
          </div>
        </div>  
      </div>

      <div className="flex justify-end items-center text-white gap-x-[4rem] mx-[10rem]">
        <SiHtml5 className="w-[5rem] h-[5rem] bg-gray-900 p-3 rounded-2xl"/>
        <SiCss3 className="w-[5rem] h-[5rem] bg-gray-900 p-3 rounded-2xl"/>
        <SiJavascript className="w-[5rem] h-[5rem] bg-gray-900 p-3 rounded-2xl"/>
        <SiReact className="w-[5rem] h-[5rem] bg-gray-900 p-3 rounded-2xl"/>
        <SiTailwindcss className="w-[5rem] h-[5rem] bg-gray-900 p-3 rounded-2xl"/>
        <p className="font-mono text-[1rem] ml-[5rem]">| Tech Stack</p>
        <SiStackoverflow className="w-[1.3rem] h-[1.3rem] mb-1"/>
      </div>

    </div>
  );
}

export default App;
