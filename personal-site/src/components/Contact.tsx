import email from "../assets/email.png";
export default function Contact() {
    return (
        <section id="contact" className = "w-full h-auto flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-32">
                <h2 className="font-boldbloom text-2xl sm:text-4xl md:text-5xl font-bold">Contact Me</h2> 
                <p className="text-sm sm:text-base md:text-lg text-center mt-4 max-w-2xl">Feel free to reach out for collaborations or just a friendly chat!</p>
                <div className="flex flex-row items-center gap-4 sm:gap-6 mt-8 md:mt-12">
                {/* Email */}
                <a
                    href="mailto:ssantha@uwaterloo.ca"
                    className="inline-flex items-center justify-center"
                    aria-label="Email Shreeya"
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
        </section>
    )
}