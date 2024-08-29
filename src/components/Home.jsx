import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
  <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl max-w-4xl mx-auto px-6'>
    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2 text-center'>&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
    <p className='mt-3 text-xl'>Hello! 🚀 I’m a computer science student at the University of Michigan, fueled by curiosity and a passion for technology.</p>
    <p className='mt-3 text-xl'>I love crafting innovative software solutions, and finding creative ways to solve real-world problems.</p>
    <p className='mt-3 text-xl'>From exploring new technologies and markets to working on side projects that push boundaries, I’m all about turning ideas into reality.</p>
  </div>      
</div>
			<Footer/>
		</div>	
	);
}

export default Home;