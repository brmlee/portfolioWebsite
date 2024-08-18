
import React from "react";
import LSA from '../assets/LSA-TS-Research.jpg'
import dpm_safesteps from '../assets/dpm_safesteps.jpg'
import progress from '../assets/in_progress.png'
import AIPantry from '../assets/AIPantryImage.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, links, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title==='Social Rythms' && <a href="/#">
                <img className="w-full rounded-t-lg h-auto max-h-64 object-cover" src={LSA} alt="" />
            </a>}
            {title==='DPM Route Recommendation' && <a href="/#">
                <img className="w-full rounded-t-lg h-auto max-h-64 object-cover" src={progress} alt="" />
            </a>}
            {title==='Safe Steps' && <a href="/#">
                <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={dpm_safesteps} alt="" />
            </a>}
            {title==='AI Pantry Tracker' && <a href="/#">
                <img className="w-full rounded-t-lg h-auto max-h-64 object-cover " src={AIPantry} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="/#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
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
                    <a href={links} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Link:</a>
                )}
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className='flex-grow flex items-center justify-center p-4'></div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-full overflow-x-auto  justify-center">
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
]

export default Projects