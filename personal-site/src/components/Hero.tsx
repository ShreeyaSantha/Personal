
import moon from '../assets/moon.png'

export default function Hero() {
  return (
    <section className="relative bg-[url(../src/assets/bg2.png)] bg-no-repeat bg-cover min-h-[150vh] w-full bg-transparent -z-2 ">
      <div className="absolute inset-0 bg-black opacity-50 -z-1"></div>
      <div className="absolute left-20 top-32 z-10"> 
        <img src={moon} className="w-full" alt="Vite logo" /> 
      </div>
      {/* hero content */}
      <div className="absolute right-20 top-1/4 z-10  justify-end h-full">
        <h1 className="font-boldbloom text-8xl md:text-8xl text-while text-right">
          Hi, I’m Shreeya!
        </h1>
      </div>
    </section>
  );
}