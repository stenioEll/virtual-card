import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import Navbar from '../components/Navbar';


function Experience() {
  
  const icons = {
    linkedin: faLinkedin,
    github: faGithub,
    portfolio: faLaptop,
    email: faEnvelope
  };
  
  /*useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #34D399, #3B82F6)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #3B82F6, #EC4899)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #EC4899, #F59E0B)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #F59E0B, #34D399)' });
  }, []);*/

  return (
    <div className='bg-gradient-animate  flex flex-col items-center justify-center h-screen font-poppins'>
      <div className='bg-teal-600 p-6 pb-0 rounded-lg shadow-lg  w-96 h-auto flex flex-col' >
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold'>Experience</h1>
        </header>
        

            <div className=''>
             
              <ol class="relative border-l border-gray-200 dark:border-teal-500">                  
                  <li class="mb-10 ml-4">

                      <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-teal-700 dark:border-teal-700 dark:bg-teal-300"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">April 2023 - Now</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-teal-300">Frontend Developer <span className='text-white'>-</span> <span className='text-teal-900'>Hospital Napoleão Laureano</span> </h3>
                      <p class="mb-4 text-xs font-normal text-gray-200 dark:text-teal-200">Developing aplications using React JS, Flask, Node JS</p>
                      <a href="#" class="inline-flex items-center rounded px-4 py-2 text-xs font-medium focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-teal-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-teal-700 dark:focus:ring-teal-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                  </li>
                  <li class="mb-10 ml-4">
                      <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-teal-700 dark:bg-teal-300"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">July 2022 - Now</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-teal-300">Freenlancer </h3>
                      <p class="mb-4 text-xs font-normal text-gray-200 dark:text-teal-200">Devloping projects with React Native, NextJs and prototypes on Figma</p>
                      <a href="#" class="inline-flex items-center rounded px-4 py-2 text-xs font-medium focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-teal-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-teal-700 dark:focus:ring-teal-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                  </li>
              </ol>

                
            </div>
           <Navbar/>
           </div>    
    </div>
  );
}

export default Experience;

