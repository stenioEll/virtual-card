import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

//import Experience from './pages/Experience';
import gsap from 'gsap';
import Profile from '../assets/profile.png';
import Navbar from '../components/Navbar';

function Home() {
  
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
    
    <div className='bg-gradient-animate animate-fade-up flex items-center justify-center h-screen font-poppins'>
        <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-72 h-80 flex flex-col' >
          <header className='flex flex-col justify-center items-center'>
            <div className="w-12 h-12 rounded-full overflow-hidden mx-auto">
              <img className="animate-fade w-full h-full object-cover" src={Profile} alt="Imagem do card" />
            </div>
            <h1 className='text-white font-light mt-2 wiggle-more animate-fade-up'>Frontend Developer</h1>
          </header>
          <div className='mt-2' >
            <h1 className='ml-4 text-[14px] text-white animate-fade-up'>About me</h1>
            <h1 className='m-4 mt-2 text-white text-justify text-[12px] font-light animate-fade-up' >Hi i am Stênio Ellison student of Computer Engineering at UFPB and Frontend Developer.</h1>
          </div>
          <div className=' flex justify-center h-screen mt-2 gap-2'>
              {Object.keys(icons).map((key) => (
                  
                  <div key={key}
                  className={`
                    h-12
                    w-12  
                    flex 
                    items-center 
                    justify-center 
                    backdrop-filter 
                    backdrop-blur-lg 
                    rounded 
                    cursor-pointer
                    transition 
                    duration-5000 
                    ease-in-out
                    animate-bounce
                    first:hover:shadow-lg
                  first:hover:bg-blue-400
                  [&:nth-child(2)]:hover:bg-gray-700
                    [&:nth-child(2)]:hover:shadow-lg
                  [&:nth-child(3)]:hover:bg-green-400
                    [&:nth-child(3)]:hover:shadow-lg
                    last:hover:shadow-lg
                  last:hover:bg-red-400
                    animate-fade
                  
                    `}
                     
                  >
                    <FontAwesomeIcon icon={icons[key]} color='white' style={{ opacity: 0.9 }} />
                  </div>
                ))}
            </div>
            <div>   
          </div>
          <div className='animate-fade'>
            <Navbar/>
          </div>
          
        </div>
      </div>
    
  );
}
export default Home;

