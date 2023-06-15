import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import {Experience} from '../Experience'
import Home from './pages/Home'
//import Home from './pages/Home';
import Experience from './pages/Experience'


function App() {
    return (
      <>
        <Home/>
        <Experience/>
      </>

    )
}

export default App;


