

type CardProps = {
    title: string;
    description?: string;
    languages?: string[];
};

const languagesColors: {[key: string]: string} = {
    'React': 'bg-blue',
    'TypeScript': 'bg-yellow',
    'CSS': 'bg-purple',
    'JavaScript': 'bg-yellow',
    'Python': 'bg-green',
    'Java': 'bg-red',
    'HTML': 'bg-orange',
    'Tailwind': 'bg-teal',
    'SQL': 'bg-indigo',
    // Add more languages and their corresponding colors here
};

export default function Card({title, description, languages}: CardProps) {
    return (
        <div className="h-1/3 md:h-1/3 md: transition-300 group relative flex aspect-[5/4] flex-col justify-evenly overflow-hidden rounded-3xl border border-grey3 px-6 pb-8 hover:border-grey2"> 
            <h4 className="mb-2 text-lg md:text-2xl font-bold text-white">{title}</h4>
            <p className="transition-300 leading-loose text-grey2 group-hover:text-grey1 xl:text-lg"> {description} </p>
            <div className="mt-4 flex flex-wrap gap-2">
                {languages?.map((language, index) => (
                    <span key={index} className={`rounded-full ${languagesColors[language]||'bg-gray'} px-3 py-1 text-sm text-grey1 group-hover:bg-grey2 group-hover:text-white`}>
                        {language} 
                    </span>
                ))}
            </div>
        </div>
    )
}