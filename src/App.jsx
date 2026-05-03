import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, ArrowUpRight, Mail } from 'lucide-react';


const EXPERIENCE = [
    {
        company: "AmaliTech",
        role: "DevOps Intern",
        description: "built gitlab ci/cd pipelines that cut deployment time from 30 min to under 5. containerized services with docker and set up prometheus + grafana monitoring with slack alerts for downtime.",
        logo: "/amalitech.jpg",
    },
    {
        company: "ISTAD-UITS (KNUST)",
        role: "Infrastructure Intern",
        description: "configured vms on proxmox for university services. set up vlans and firewall rules to segment campus traffic. troubleshot network issues with packet analysis, cutting ticket resolution time.",
        logo: "/knust.jpg",
    },
    {
        company: "Ideation Axis",
        role: "Software Engineering Intern",
        description: "built features for a django web app including auth and dashboards. refactored legacy code to cut page load times by 40%. wrote unit tests to improve reliability before releases.",
        logo: "/ideation.jpg",
    },
];

const PROJECTS = [
    {
        title: "self-hosted gitlab",
        description: "spun up a full gitlab instance with docker compose, including python and node runners that auto-register on boot. wrote a bash script that hits the gitlab api to generate runner tokens — no manual clicks needed. includes a sample ci pipeline and docs explaining every piece.",
        link: "https://github.com/yoadjei/self-hosted-gitlab",
    },
    {
        title: "mini etl",
        description: "python framework for building data pipelines that extract from apis or databases, transform with custom functions, and load into csv, json, or postgres. supports scheduling, logging, and retry logic. built it to learn how tools like airflow work under the hood.",
        link: "https://github.com/yoadjei/mini-etl",
    },
    {
        title: "mframapa ai",
        description: "air quality prediction platform covering all 54 african countries. uses xgboost trained on nasa satellite data to forecast pm2.5 levels for locations without physical sensors. fastapi backend, react frontend, deployed on aws with docker. completely free to use.",
        link: "http://mframapaai.health/",
    },
];


const useTypewriter = (text, speed = 50, startDelay = 0) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let timeoutId;
        let intervalId;

        timeoutId = setTimeout(() => {
            let i = 0;
            intervalId = setInterval(() => {
                if (i < text.length) {
                    setDisplayText((prev) => text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(intervalId);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, speed, startDelay]);

    return displayText;
};

function App() {
    const [darkMode, setDarkMode] = useState(true);

    // Typewriter effects
    const headerText = useTypewriter("hi, i'm yaw osei", 50, 0);
    const subText1 = useTypewriter("devops & software engineering", 50, 1000);
    const subText2 = useTypewriter("building, deploying, automating.", 30, 1500);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen transition-colors duration-300 ease-in-out ${darkMode ? 'dark' : ''} bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans relative overflow-hidden`}>

            {/* Decorative Background SVG */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <svg className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] opacity-20 dark:opacity-10 blur-3xl animate-pulse" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor" className="text-blue-500 dark:text-purple-500" />
                </svg>
                <svg className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] opacity-20 dark:opacity-5 blur-3xl animate-pulse delay-1000" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor" className="text-purple-400 dark:text-blue-600" />
                </svg>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-16 relative z-10">

                {/* Header */}
                <header className="flex justify-between items-start">
                    <div className="min-h-[100px] flex flex-col justify-center">
                        <h1 className="text-xl font-medium text-black dark:text-white tracking-tight">
                            {headerText}
                        </h1>
                        <div className="mt-1 flex flex-col gap-0.5">
                            <p className="text-black dark:text-gray-200 font-medium text-sm h-5 flex items-center">
                                {subText1}
                            </p>
                            <p className="text-gray-500 dark:text-zinc-400 text-sm h-5 flex items-center">
                                {subText2}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        <img
                            src="/avatar.jpg"
                            alt="Yaw Osei"
                            className="w-10 h-10 rounded-sm object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </header>

                {/* Currently */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Currently</h2>
                    <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-sm flex items-center justify-center text-xs font-bold overflow-hidden">
                            <img src="/knust.jpg" alt="KNUST" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-black dark:text-white">Computer Science</p>
                            <p className="text-xs text-gray-500 dark:text-zinc-500">KNUST</p>
                        </div>
                    </div>
                </section>

                {/* Previously */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Previously</h2>
                    <div className="space-y-6">
                        {EXPERIENCE.map((job, index) => (
                            <JobItem key={index} {...job} />
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Projects</h2>
                    <div className="flex flex-col gap-1">
                        {PROJECTS.map((project, index) => (
                            <ProjectItem key={index} {...project} />
                        ))}
                    </div>
                </section>

                {/* Research */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Research</h2>
                    <a
                        href="/research"
                        className="group flex items-baseline gap-2 hover:bg-gray-50 dark:hover:bg-zinc-900 p-2 -mx-2 rounded transition-colors"
                    >
                        <span className="text-sm border-b border-gray-300 dark:border-zinc-700 pb-0.5 group-hover:border-black dark:group-hover:border-white transition-colors">
                            view my academic work & publications
                        </span>
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </section>

                {/* Writing */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Writing</h2>
                    <a
                        href="/thoughts.html"
                        className="group flex items-baseline gap-2 hover:bg-gray-50 dark:hover:bg-zinc-900 p-2 -mx-2 rounded transition-colors"
                    >
                        <span className="text-sm border-b border-gray-300 dark:border-zinc-700 pb-0.5 group-hover:border-black dark:group-hover:border-white transition-colors">
                            40 thoughts on life
                        </span>
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </section>

                {/* Footer */}
                <footer className="flex gap-4 pt-8">
                    <SocialLink href="https://github.com/yoadjei" icon={<Github size={18} />} />
                    <SocialLink href="https://www.linkedin.com/in/yawosei/" icon={<Linkedin size={18} />} />
                    <SocialLink href="https://x.com/yawoseii" icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    } />
                    <SocialLink href="mailto:adjeiyawosei@gmail.com" icon={<Mail size={18} />} />
                </footer>
            </div>
        </div>
    );
}




function JobItem({ logo, company, role, description }) {
    const isImage = logo.startsWith('/');

    return (
        <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-zinc-400 overflow-hidden">
                {isImage ? (
                    <img src={logo} alt={company} className="w-full h-full object-cover" />
                ) : (
                    logo
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                    {company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400">{role}</p>
                <p className="text-xs text-gray-400 dark:text-zinc-500 mt-1">{description}</p>
            </div>
        </div>
    );
}

function ProjectItem({ title, description, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 -mx-3 rounded hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors group"
        >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-sm font-medium text-black dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {title}
                </h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-zinc-500 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
                {description}
            </p>
        </a>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black dark:text-zinc-500 dark:hover:text-white transition-colors"
        >
            {icon}
        </a>
    );
}

export default App;
