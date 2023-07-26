import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Navbar from '../components/Navbar';

import Tilt from 'react-parallax-tilt'


function Experience() {
  
  const [isPaused, setIsPaused] = useState(false);
  const timelineRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ repeat: -1 });
    timelineRef.current
      .to(gradientRef.current, { duration: 3, background: 'linear-gradient(to right, #34D399, #3B82F6)' })
      .to(gradientRef.current, { duration: 3, background: 'linear-gradient(to right, #3B82F6, #EC4899)' })
      .to(gradientRef.current, { duration: 3, background: 'linear-gradient(to right, #EC4899, #F59E0B)' })
      .to(gradientRef.current, { duration: 3, background: 'linear-gradient(to right, #F59E0B, #34D399)' });

    if (isPaused) {
      timelineRef.current.pause();
    }

    return () => {
      timelineRef.current.kill();
    };
  }, [isPaused]);

  const toggleAnimation = () => {
    setIsPaused((prevState) => !prevState);
  };

  useEffect(() => {
    if (timelineRef.current) {
      if (isPaused) {
        timelineRef.current.pause();
      } else {
        timelineRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <div ref={gradientRef} className='bg-gradient-animate animate-fade-up flex items-center justify-center h-screen font-poppins'>
      <button onClick={toggleAnimation} className='absolute top-5 right-5 text-white'>
        {isPaused ? <FontAwesomeIcon icon={faPlayCircle} /> : <FontAwesomeIcon icon={faPauseCircle} />}
      </button>
      <Tilt>
        <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-72 h-72 flex flex-col' >
          <header className='flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold'>Experience</h1>
          </header>
              <div className='p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                <ol class="relative border-l border-gray-200 dark:border-teal-500">                  
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-teal-700 dark:border-teal-700 dark:bg-teal-300"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200 animate-jump-in">April 2023 - Now</time>
                        <h3 class="font-semibold text-gray-900 dark:text-gray-700 animate-fade-left">FullStack Developer <span className='text-teal-200 text-sm'>Hospital Napoleão Laureano</span> </h3>
                        <p class="mb-4 text-xs font-normal text-gray-200 dark:text-teal-200 animate-fade-left">Developing aplications using React JS, Flask, Node JS</p>
                        <a onClick={() => { window.location.href = 'https://github.com/stenioEll?tab=repositories'}} href="#" class="bg-opacity-10 text-sm bg-white font-light bg-blur-sm backdrop-filter backdrop-blur-sm shadow-lg text-white p-2 rounded-md hover:shadow-sm transition-all duration-300">Learn more</a>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-teal-700 dark:bg-teal-300"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">July 2022 - Now</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-teal-300 animate-fade-left">Freenlancer </h3>
                        <p class="mb-4 text-xs font-normal text-gray-200 dark:text-teal-200 animate-fade-left">Devloping projects with React Native, NextJs and prototypes on Figma</p>
                        <a onClick={() => { window.location.href = 'https://github.com/stenioEll?tab=repositories'}} href="#" class="bg-opacity-10 text-sm bg-white font-light bg-blur-sm backdrop-filter backdrop-blur-sm shadow-lg text-white p-2 rounded-md hover:shadow-sm transition-all duration-300">Learn more</a>
                    </li>
                </ol>
              </div>
              <Navbar/>
            </div>
          </Tilt>    
    </div>
  );
}

export default Experience;

