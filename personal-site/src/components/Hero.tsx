
import moon from '../assets/moon.png'
import Star_Map from './UI/Star';
import { useTypewriter } from './UI/TypeWriter';
import bg2 from '../assets/bg2.png'

export default function Hero() {
    const text = ["Software Engineer", "Web Developer", "Game Dev Enthusiast", "Tech Enthusiast"];
    const [displayText,isTyping] = useTypewriter(text, 120);
    const scrollTo = (id:string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
    <section className="relative bg-cover bg-no-repeat w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-end items-center overflow-hidden px-4 md:px-0" style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: '130%',
      }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-2"></div>
      {Star_Map(50)}
      {/* Moon image + Title */}  
      <div></div>
     
      <img src={moon} className="w-1/2 sm:w-1/3 md:w-1/4 z-0 animate-translateY" alt="Shreeya moon decoration" /> 
       <div className='z-0 font-boldbloom px-4 sm:px-8 md:px-20 text-center md:text-left py-8 md:py-0'>
        <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-10xl text-white">
                Hi, I’m Shreeya!
       </h1>
       <h2 className="flex flex-col md:flex-row items-center justify-center md:justify-start text-lg sm:text-2xl md:text-4xl lg:text-5xl text-white mt-4 md:mt-0">
                I'm a {displayText}
                {isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-0 md:ml-1"> </span>}
                {!isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-0 md:ml-1 animate-blink"> </span>}   
       </h2>
       <div className='flex flex-col sm:flex-row gap-4 center-items justify-center md:justify-start mt-8'>
        <button onClick={() => scrollTo("contact")} className="bg-white text-black font-semibold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
            Contact Me 
        </button>
        <button onClick={() => scrollTo("experience")} className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
            View My Work
        </button>
       </div>
       </div>
       
    </section>
  );
}