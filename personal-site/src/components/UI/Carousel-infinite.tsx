import { useEffect, useRef } from "react";
import Card from "./Card";
import type { Project } from "../types/types";

type CarouselProps = {
  projects: Project[]
};

/**
 * Carousel component for react and Tailwind.
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function CarouselGallery({projects}: CarouselProps) {

  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const preventScroll = (e: WheelEvent | TouchEvent) => e.preventDefault();

    carousel.addEventListener("wheel", preventScroll as EventListener, { passive: false });
    carousel.addEventListener("touchmove", preventScroll as EventListener, { passive: false });

    return () => {
      carousel.removeEventListener("wheel", preventScroll as EventListener);
      carousel.removeEventListener("touchmove", preventScroll as EventListener);
    };
  }, []);

  return (
    <section className="mb-section w-full h-auto overflow-hidden hover:animate-none">
      <div ref={carouselRef} className="carousel flex overflow-x-hidden no-scrollbar py-4" > {/* carousel*/}
        <div className ="flex pr-4 items-center justify-center md:gap-4  hover:animate-pause ">
          {projects.map((project, index) => (
            <div key={index} className="flex-none flex-none basis-[22em] md:basis-[25em] animate-slide align-center"> {/* card*/}
              <div className= "h-auto w-[318px] md:w-auto rounded-3xl shadow-[0_0_3px_3px_rgba(100,120,150,0.8)] hover:shadow-[0_0_20px_5px_rgba(100,120,150,0.6)] transition-shadow duration-300">
                <Card 
                  title={project.title}
                  description={project.description}
                  languages={project.langauges}
                />
              </div>
            </div>            
          ))}
        </div>
        <div className ="flex pr-4 items-center justify-center md:gap-4  hover:animate-pause ">
          {projects.map((project, index) => (
            <div key={index} className="flex-none flex-none basis-[22em] md:basis-[25em] animate-slide align-center"> {/* card*/}
              <div className= "h-auto w-[318px] md:w-auto rounded-3xl shadow-[0_0_3px_3px_rgba(100,120,150,0.8)] hover:shadow-[0_0_20px_5px_rgba(100,120,150,0.6)] transition-shadow duration-300">
                <Card 
                  title={project.title}
                  description={project.description}
                  languages={project.langauges}
                />
              </div>
            </div>            
          ))}
        </div>
        </div>
        
    </section>
  );
}

