import CarouselGallery from "./UI/Carousel-infinite";
import type { Project } from "./types/types";
import { ProgressBar } from "./UI/Progress";
import email from "../assets/email.png";


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
        <section className = "relative h-screen w-full flex flex-col items-center justify-evenly px-8 py-16"> 
        <h1 className=" font-boldbloom text-4xl md:text-5xl font-bold">Projects</h1>
        {/* Carousel Project */}
        <section className = "relative flex flex-row justify-between w-full h-2/3 pt-8">
            <CarouselGallery projects={projectsUpdated} />
        </section>

        {/* Skills and Interests */}
        <div className = "w-full flex flex-row items-start justify-evenly mt-16">
            <div className ="flex flex-col items-center w-1/2 h-auto">
             <h1 className=" font-boldbloom text-4xl md:text-5xl font-bold">Skills</h1>
             <ProgressBar label="JavaScript" value = {75}/>
             <ProgressBar label="React" value = {80}/>
             <ProgressBar label="CSS" value = {85}/>
             <ProgressBar label="Node.js" value = {60}/>
             <ProgressBar label="Python" value = {65}/>
             <ProgressBar label="C++" value = {80}/>
            </div> 
            <div className ="relative flex flex-col items-center w-1/2 h-auto">
                <h2 className=" font-boldbloom text-4xl md:text-5xl font-bold">Contact Me</h2> 
                <p className="text-lg text-center mt-4">Feel free to reach out for collaborations or just a friendly chat!</p>
                <div className="mt-6 flex flex-col items-center gap-3">
                {/* Email */}
                <a
                    href="mailto:ssantha@uwaterloo.ca"
                    className="inline-flex items-center justify-center"
                    aria-label="Email Shreeyansh"
                >
                    <img
                    src={email}
                    alt="Email"
                    className="w-10 h-10"
                    />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/shreeyansh-santha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                    aria-label="Shreeyansh on LinkedIn"
                >
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-10 h-10"
                    />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/ShreeyaSantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                    aria-label="Shreeyansh on GitHub"
                >
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-10 h-10"
                    />
                </a>
            </div>
        </div>
    </div>
</section>
    )
}