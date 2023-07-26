import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Tilt from 'react-parallax-tilt'


function Contact() {

  const [isPaused, setIsPaused] = useState(false);
  const timelineRef = useRef(null);
  const gradientRef = useRef(null);

  const data = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/st%C3%AAnio-ellison-6b2058212/' },
    { icon: faGithub, link: 'https://github.com/stenioEll' },
    { icon:  faWhatsapp , link: 'https://api.whatsapp.com/send?phone=5584999182370&text=Hey%20how%20are%20You.' },
    { icon: faEnvelope, link: 'mailto:stenio1998@gmail.com' },
  ];
  
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
            <h1 className='text-gray-300 font-bold animate-fade-down'>Contact</h1>
          </header>
          <div>
          <h1 className='m-4 mt-2 text-white text-justify text-[12px] font-light animate-fade' >If you're interested in my skills and experience Frontend Developer you can contact me using the details provided below.</h1>
          </div>
              <div className=' flex justify-center mt-4 h-screen gap-2'>
                {data.map(({ icon, link }) => (  
                    <a
                    key={icon}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
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

                      `}          
                    >
                      <FontAwesomeIcon icon={icon} color='white' style={{ opacity: 0.9 }} />
                    </a>
                  ))}
              </div>         
              <Navbar/>
            <div>   
          </div>
        </div>
      </Tilt>
    </div>
  );
}
export default Contact;

