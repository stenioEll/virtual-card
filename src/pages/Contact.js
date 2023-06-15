import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';


export default function Contact() {
  
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
    <div className='bg-gradient-animate  flex items-center justify-center h-screen font-mono'>
      <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-72 h-72 flex flex-col' >
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold'>Contatos</h1>
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
            <div className='mt-auto'>
            <nav>
              <ul class="flex justify-between text-white">
                <li>
                  <Link href="/" className="hover:text-gray-300 cursor-pointer">About</Link>
                </li>
                <li>
                  <Link href='experience' className="hover:text-gray-300 cursor-pointer">Experience</Link>
                </li>
                <li>
                  <Link to="contact" className="hover:text-gray-300 cursor-pointer">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>   
        </div>
        
      </div>
    </div>
  );
}

