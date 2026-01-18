

type CardProps = {
    title: string;
    description?: string;
    languages?: string[];
};

const languagesColors: {[key: string]: string} = {
    'React': 'bg-blue',
    'TypeScript': 'bg-yellow',
    'CSS': 'bg-purple',
    // Add more languages and their corresponding colors here
};

export default function Card({title, description, languages}: CardProps) {
    return (
        <div className="transition-300 group relative flex aspect-[3/2] flex-col justify-end overflow-hidden rounded-3xl border border-grey3 px-6 pb-8 hover:border-grey2"> 
            <h4 className="mb-2 text-2xl font-bold text-white">{title}</h4>
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