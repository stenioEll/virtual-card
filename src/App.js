
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
//import {Experience} from '../Experience'
import Home from './pages/Home'
//import Home from './pages/Home';
import Experience from './pages/Experience'
import Contact from './pages/Contact'


function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="experience" element={ <Experience/>}/>
            <Route path='contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;


