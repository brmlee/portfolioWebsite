
import React from "react";
import LSA from '../assets/LSA-TS-Research.jpg'
import dpm_safesteps from '../assets/dpm_safesteps.jpg'
import progress from '../assets/in_progress.png'
import AIPantry from '../assets/AIPantryImage.png'
import supportBot from '../assets/supportBot3.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, links, technologies }) => {
    return (
        <div className="flex flex-col h-full bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
                {title === 'Social Rythms' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover" src={LSA} alt="" />
                </a>}
                {title === 'DPM Route Recommendation' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover" src={progress} alt="" />
                </a>}
                {title === 'Safe Steps' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={dpm_safesteps} alt="" />
                </a>}
                {title === 'AI Pantry Tracker' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={AIPantry} alt="" />
                </a>}
                {title === 'AI Customer Support' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={supportBot} alt="" />
                </a>}
                {title === 'AI Flashcards w/ Stripe' && <a href="/#">
                    <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={progress} alt="" />
                </a>}
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div>
                    <a href="/#">
                        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                    </a>
                    <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
                </div>
                <div className="mt-auto pt-4">
                    <div className='flex flex-wrap gap-2 mb-2'>
                        {technologies.map((tag, index) => (
                            <p
                                key={`${index}-${tag}`}
                                className='text-[14px] text-blue-500'
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                    {links && links.trim() !== '' && (
                        <a href={links} className="block text-center text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Link</a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className='flex-grow flex items-center justify-center p-4'></div>
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
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Social Rythms',
        description:'Social Rythms is the iOS/Android mobile application to collect user data from HealthKit for Daniel Forger. This application runs on a backend using MySQL, Docker, Poetry and Redis also running Alembic migrations.',
        image: {LSA},
        links:'',
        technologies:['Swift' ,'Kotlin' , 'Python']
    },
    {
        title:'DPM Route Recommendation',
        description:'cross-platform mobile app that guides users through "less stressful" routes, aimed to improve safety of elderly people.',
        image: {progress},
        links:"https://dpm.engin.umich.edu/research/",
        technologies:[ 'React Native', 'TypeScript']
    },
    {
        title:'Safe Steps',
        description:'Data collection IOS app for IMU sensor data collection and route guidance. For fall risk monitoring research project.',
        image: {dpm_safesteps},
        links:"https://docs.google.com/presentation/d/1vStWMrIQ6YM_LrRgMd2bifNdzXYDGjP52t8vUCKshTU/edit?usp=sharing",
        technologies:[ 'IOS/Swift', 'Nodejs', 'Firebase']
    },
    {
        title:'AI Pantry Tracker',
        description:'A pantry tracking web application that allows you to add items with photos, and recomend recipes with current ingredients',
        image: {AIPantry},
        links:"https://ai-pantry-tracker-drab.vercel.app/",
        technologies:[ 'TypeScript', 'OpenAI', 'Firebase']
    },
    {
        title:'AI Customer Support',
        description:'An AI-powered Support Assistant creating a real-time chat interface that leverages the power of OpenAI’s GPT models to provide responsive and intelligent support to users. More functionalites to come',
        image: {supportBot},
        links:"https://github.com/brmlee/AI-Customer-support",
        technologies:[ 'TypeScript', 'OpenAI', ]
    },
    {
        title:'AI Flashcards w/ Stripe',
        description:'A cutting-edge web application designed to revolutionize the way students and professionals create, manage, and study flashcards. ',
        image: {progress},
        links:"https://github.com/brmlee/Flashcards-With-Stripe",
        technologies:[ 'JS', 'OpenAI', 'Stripe', 'Gemini', 'Firebase' ]
    },
]   

export default Projects