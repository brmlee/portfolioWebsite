import React from "react";
import LSA from '../assets/LSA-TS-Research.jpg';
import dpm_safesteps from '../assets/dpm_safesteps.jpg';
import progress from '../assets/in_progress.png';
import AIPantry from '../assets/AIPantryImage.png';
import supportBot from '../assets/supportBot3.png';
import umich from '../assets/umicheecs.jpeg';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, links, technologies }) => {
    return (
        <div className="flex flex-col h-full bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <a href={links || "/#"}>
                    <div className="w-full h-64 bg-black flex items-center justify-center overflow-hidden">
                        <img
                            className="max-h-full max-w-full object-contain rounded-t-lg"
                            src={image}
                            alt={title}
                        />
                    </div>
                </a>
            </div>

            {/* Description & Tags */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div>
                    <a href={links || "/#"}>
                        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                            {title}
                        </h5>
                    </a>
                    <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {technologies.map((tag, index) => (
                            <p
                                key={`${index}-${tag}`}
                                className="text-[14px] text-blue-500"
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                    {links && links.trim() !== '' && (
                        <a
                            href={links}
                            className="block text-center text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
                        >
                            Link
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className="flex-grow flex items-center justify-center p-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Operating Systems',
        description: 'Developed multiple C++ operating system components for the University of Michigan EECS 482 course. Implemented a user-level thread library supporting context switching, synchronization primitives, and preemption; a virtual memory pager managing file-backed and swap-backed pages with clock-based eviction and copy-on-write; and a file system module handling persistent storage management and block-level I/O.',
        image: umich,
        links: '',
        technologies: ['C++'],
    },
    {
        title: 'Social Rythms',
        description: 'Social Rythms is the iOS/Android mobile application to collect user data from HealthKit for Daniel Forger. This application runs on a backend using MySQL, Docker, Poetry and Redis also running Alembic migrations.',
        image: LSA,
        links: '',
        technologies: ['Swift', 'Kotlin', 'Python'],
    },
    {
        title: 'DPM Route Recommendation',
        description: 'Cross-platform mobile app that guides users through "less stressful" routes, aimed to improve safety of elderly people.',
        image: progress,
        links: 'https://dpm.engin.umich.edu/research/',
        technologies: ['React Native', 'TypeScript'],
    },
    {
        title: 'Safe Steps',
        description: 'Data collection iOS app for IMU sensor data collection and route guidance. Built for fall risk monitoring research project.',
        image: dpm_safesteps,
        links: 'https://docs.google.com/presentation/d/1vStWMrIQ6YM_LrRgMd2bifNdzXYDGjP52t8vUCKshTU/edit?usp=sharing',
        technologies: ['iOS/Swift', 'Node.js', 'Firebase'],
    },
    {
        title: 'AI Pantry Tracker',
        description: 'A pantry tracking web application that allows you to add items with photos and recommends recipes using your current ingredients.',
        image: AIPantry,
        links: 'https://ai-pantry-tracker-drab.vercel.app/',
        technologies: ['TypeScript', 'OpenAI', 'Firebase'],
    },
    {
        title: 'AI Customer Support',
        description: 'An AI-powered support assistant featuring a real-time chat interface leveraging OpenAI’s GPT models to provide responsive and intelligent support to users.',
        image: supportBot,
        links: 'https://github.com/brmlee/AI-Customer-support',
        technologies: ['TypeScript', 'OpenAI'],
    },
    {
        title: 'AI Flashcards w/ Stripe',
        description: 'A web app designed to revolutionize how students and professionals create, manage, and study flashcards with integrated Stripe payments.',
        image: progress,
        links: 'https://github.com/brmlee/Flashcards-With-Stripe',
        technologies: ['JavaScript', 'OpenAI', 'Stripe', 'Gemini', 'Firebase'],
    },
];

export default Projects;
