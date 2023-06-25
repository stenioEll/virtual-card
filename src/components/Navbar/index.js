import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
      <div className='mt-auto font-poppins font-light mb-2 '>
        <nav>
          <ul class="flex justify-between text-white relative">
            <li class="hover:shadow-lg transform hover:scale-100 transition-all duration-500">
              <a href="/" className="hover:text-gray-300 cursor-pointer">About</a>
            </li>
            <li class="hover:shadow-lg transform hover:scale-100 transition-all duration-500">
              <a href='/experience' className="hover:text-gray-300 cursor-pointer">Experience</a>
            </li>
            <li class="hover:shadow-lg transform hover:scale-100 transition-all duration-500">
              <a href="/contact" className="hover:text-gray-300 cursor-pointer">Contact</a>
            </li>
            
          </ul>
        </nav>
      </div>

  );
}

