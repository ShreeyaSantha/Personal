import CarouselGallery from "./UI/Carousel-infinite";
import type { Project } from "./types/types";
import { ProgressBar } from "./UI/Progress";


const projectsUpdated: Project[] = [
    {
        title: "House Price Prediction Model",
        description: "Compared multiple regression algorithms to identify the best-performing model",
        langauges: ["Python", "Matplotlib", "Seaborn"]
    },
    {
        title: "Tic-Tac-Toe Game: Minecraft Edition",
        description: "Built a  unique variation of Tic-Tac-Toe using Java and XML in Android Studio.",
        langauges: ["XML", "Java"]
    },
    {
        title: "Data Science Club Website",
        description: "Developed new responsive website for the club & Helped create relational database for CXC hackathon ",
        langauges: ["React", "Tailwind", "SQL"]
    }, 
]



export default function Experience() {
    
    return (
        <>
        <section id = "experience" className = "relative h-auto w-full flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24"> 
        <h1 className="font-boldbloom text-2xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-12">Projects</h1>
        {/* Carousel Project */}
        <section className = "relative flex flex-row justify-between w-full h-1/5 md:h-1/4 pt-2 mb-8 md:mb-16">
            <CarouselGallery projects={projectsUpdated} />
        </section>
        {/* Skills and Interests */}
        <h1 className="font-boldbloom text-2xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 py-0 md:py-8">Skills</h1>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 md:gap-16 h-auto">
            <div className="w-full flex flex-col items-center">
             <ProgressBar label="JavaScript" value = {75}/>
             <ProgressBar label="React" value = {80}/>
             <ProgressBar label="CSS" value = {85}/>
            </div>
            <div className="w-full flex flex-col items-center">
             <ProgressBar label="Node.js" value = {60}/>
             <ProgressBar label="Python" value = {65}/>
             <ProgressBar label="C++" value = {80}/>
            </div>
        </div>
        </section>
        </>
    )
}