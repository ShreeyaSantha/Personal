
import { useState, useEffect } from 'react';
import moon from '../assets/moon.png'
import Star from './UI/Star.tsx' 


{/* else if (j == text[i].length && i < text.length || backwords) {
        backwords = true;
        speed = 25; 
        setDisplayText(prevText => prevText.slice(0, -1));
        j--;
        if (j === 0) {
          backwords = false;
          i = (i + 1) % text.length;
          speed = 50; 
        }
      } */}

const useTypewriter = (text:string[], speed: number = 25) => {
  const [displayText, setDisplayText] = useState('');
 

  useEffect(() => {
     let i = 0; //array index
     let j = -1; // character index
     let backwords = false;
    const typingInterval = setInterval(() => {
      if (i < text.length && j < text[i].length && !backwords) {
        setDisplayText(prevText => prevText + text[i].charAt(j));
        j++;
        console.log("Adding char:", j);

      } else if (i < text.length - 1 && (j === text[i].length || backwords)) {
        console.log("Deleting char:", j);

        backwords = true;
        setDisplayText(prevText => prevText.slice(0, -1));
        j--;
        if (j === 0) {
          backwords = false;
          i = (i + 1);
        }
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

export default function Hero() {
    const text = ["S oftware Engineer", "W eb Developer", "G ame Dev Enthusiast", "T ech Enthusiast"];
    const displayText = useTypewriter(text, 120);
    return (
    <section className="relative bg-[url(../src/assets/bg.png)] bg-no-repeat relative w-full h-screen flex flex-row justify-end items-center overflow-x-hidden">
      <div className="absolute inset-0 bg-black opacity-50 -z-2"></div>
      {/* Moon image + Title */}
      <div></div>
      <Star size={4} top={10} left={20} degrees={45}/>
     
      <img src={moon} className="w-1/5 z-0 animate-sparkle " alt="Vite logo" /> 
       <div className='z-0 font-boldbloom'>
        <h1 className=" sm:text-4xl md:text-8xl lg:text-10xl text-while px-20">
                Hi, I’m Shreeya!
       </h1>
       <h2 className="sm:text-2xl md:text-4xl lg:text-5xl text-while px-20">
                I'm a {displayText}
       </h2>
       </div>
       
    </section>
  );
}