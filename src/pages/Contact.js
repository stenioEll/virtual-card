import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import Navbar from '../components/Navbar';


function Contact() {
  
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

  
    
    const cardHover = [
      'hover:bg-blue-600',
      'hover:bg-gray-800',
      'hover:bg-green-600',
      'hover:bg-red-600',
      'hover:scale-100 hover:shadow-lg bg-gradient-to-b from-white/20 hover:to-white/10'
    ]  
      
    
  

  return (
    <div className='bg-gradient-animate font-poppins flex items-center justify-center h-screen font-poppins'>
      <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-72 h-72 flex flex-col' >
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-gray-300 font-bold'>Contact</h1>
        </header>
        <div>
        <h1 className='m-4 mt-2 text-white text-justify text-[12px] font-light' >If you're interested in my skills and experience Frontend Developer you can contact me using the details provided below.</h1>
        </div>
            <div className=' flex justify-center items-center h-screen gap-2'>
              {Object.keys(icons).map((key) => (
                  
                  <div key={key}
                  className={`
                    h-16 
                    w-32  
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
                    `}
                     
                  >
                    <FontAwesomeIcon icon={icons[key]} color='white' size='xl' style={{ opacity: 0.9 }} />
                  </div>
                ))}
            </div>           
            <Navbar/>
          <div>   
        </div>
        
      </div>
    </div>
  );
}
export default Contact;

