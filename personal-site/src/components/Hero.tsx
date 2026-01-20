
import moon from '../assets/moon.png'
import Star_Map from './UI/Star';
import { useTypewriter } from './UI/TypeWriter';
import bg2 from '../assets/bg2.png'

export default function Hero() {
    const text = ["Software Engineer", "Web Developer", "Game Dev Enthusiast", "Tech Enthusiast"];
    const [displayText,isTyping] = useTypewriter(text, 120);
    return (
    <section className="relative `bg-{}` bg-cover bg-no-repeat relative w-full h-screen flex flex-row justify-end items-center overflow-hidden" style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: '130%',
      }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-2"></div>
      {Star_Map(50)}
      {/* Moon image + Title */}  
      <div></div>
     
      <img src={moon} className="w-1/5 z-0 animate-translateY " alt="Vite logo" /> 
       <div className='z-0 font-boldbloom px-20'>
        <h1 className=" sm:text-4xl md:text-8xl lg:text-10xl text-while">
                Hi, I’m Shreeya!
       </h1>
       <h2 className="flex items-center sm:text-2xl md:text-4xl lg:text-5xl text-while">
                I'm a {displayText}
                {isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-1"> </span>}
                {!isTyping && <span className="inline-block w-[1.5px] h-[1.2em] bg-white ml-1 animate-blink"> </span>}   
       </h2>
       <div className='flex flex-row center-items'>
        <button className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded-lg mr-4 transition duration-300">
            Contact Me 
        </button>
        <button className="mt-8 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
            View My Work
        </button>
       </div>
       </div>
       
    </section>
  );
}