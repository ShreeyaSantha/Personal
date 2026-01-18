
import { useState, useEffect } from 'react';
import moon from '../assets/moon.png'
import Star_Map from './UI/Star';
import { useTypewriter } from './UI/TypeWriter';

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

export default function Hero() {
    const text = ["Software Engineer", "Web Developer", "Game Dev Enthusiast", "Tech Enthusiast"];
    const [displayText,isTyping] = useTypewriter(text, 120);
    return (
    <section className="relative bg-[url(../src/assets/bg2.png)] bg-cover bg-no-repeat relative w-full h-screen flex flex-row justify-end items-center overflow-hidden" style={{ backgroundSize: '130%' }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-2"></div>
      {Star_Map(50)}
      {/* Moon image + Title */}  
      <div></div>
     
      <img src={moon} className="w-1/5 z-0 animate-translateY " alt="Vite logo" /> 
       <div className='z-0 font-boldbloom'>
        <h1 className=" sm:text-4xl md:text-8xl lg:text-10xl text-while px-20">
                Hi, I’m Shreeya!
       </h1>
       <h2 className="flex items-center sm:text-2xl md:text-4xl lg:text-5xl text-while px-20">
                I'm a {displayText}
                {isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-1"> </span>}
                {!isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-1 animate-blink"> </span>}   
       </h2>
       </div>
       
    </section>
  );
}