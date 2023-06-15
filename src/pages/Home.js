//import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

//import Experience from './pages/Experience';
import gsap from 'gsap';
import Profile from '../assets/profile.png';

export default function Home() {
  
  const icons = {
    linkedin: faLinkedin,
    github: faGithub,
    portfolio: faLaptop,
    email: faEnvelope
  };
  
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #34D399, #3B82F6)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #3B82F6, #EC4899)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #EC4899, #F59E0B)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #F59E0B, #34D399)' });
  }, []);

  return (
    
      <div className='bg-gradient-animate  flex items-center justify-center h-screen font-mono home'>
        <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-72 h-72 flex flex-col' >
          <header className='flex flex-col justify-center items-center'>
            <div className="w-12 h-12 rounded-full overflow-hidden mx-auto">
              <img className="w-full h-full object-cover" src={Profile} alt="Imagem do card" />
            </div>
            <h1 className='text-white font-bold'>Frontend Developer</h1>
          </header>
          <div className='mt-2' >
            <h1 className='ml-4 text-[14px] text-white'>About me</h1>
            <h1 className='m-4 mt-2 text-white text-justify text-[12px]' >Hi i am Stênio Ellison student of Computer Engineering at UFPB and Frontend Developer.</h1>
          </div>
              <div className=' flex justify-center gap-8'>
                {Object.keys(icons).map((key) => (
                    <div key={key}
                    className='h-8 w-8  flex items-center justify-center backdrop-filter backdrop-blur-lg rounded transition-transform duration-300 hover:scale-100 hover:shadow-lg bg-gradient-to-b from-white/20 hover:to-white/10 cursor-pointer'
                      
                    >
                      <FontAwesomeIcon icon={icons[key]} color='white' style={{ opacity: 0.9 }} />
                    </div>
                  ))}
              </div>
            <div>   
          </div>
          <div className='mt-auto'>
            <nav>
              <ul class="flex justify-between text-white">
                <li>
                  <a to="/" className="hover:text-gray-300 cursor-pointer">About</a>
                </li>
                <li>
                  <a to="/experience" className="hover:text-gray-300 cursor-pointer">Experience</a>
                </li>
                <li>
                  <a to="/contact" className="hover:text-gray-300 cursor-pointer">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    
  );
}

