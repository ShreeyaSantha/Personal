import Shreeya from '../assets/Shreeya.jpg';
import Star_Map from './UI/Star';

export default function AboutMe() {
  return (
    <section className=" relative h-screen w-full flex items-center justify-center px-8 py-16">
        {/* Left Side - Image Content */}
        {Star_Map(20)}
        <div className="w-1/3 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg flex-shrink-0">
              <img
                src={Shreeya}
                alt="Profile"
                className="w-full h-full object-cover"
              />
        </div>
        {/* Right Side - Text Content */}
        <div className="md:col-span-1 px-8 md:px-16">
            <h1 className=" font-boldbloom text-4xl md:text-5xl font-bold mb-6">ABOUT.</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray mb-4">Computer Science and Business Adminstration Student from University of Waterloo & Wilfrid Laurier University </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of school and work, I’m a WiCS executive member, volleyball player, and huge foodie. 
              As a WiCS exec, I help organize events each term for women in tech, including jar-painting nights (one of my absolute favourites). 
              If I’m not at a WiCS event, you can probably find me on the volleyball court or trying a new restaurant in Waterloo. 
              I’m currently working on launching my own food blog to share my favourite spots and honest reviews.

            </p>
        </div>

    </section>
  );
}
