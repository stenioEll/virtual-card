import {BrowserRouter as Router, Route} from 'react-router-dom'
import react from 'react'

//import {Experience} from '../Experience'
import {Home} from '../Home/index'


export default function Routes() {
    return (
        <Router>
 
            <Route path="/" element={<Home/>}/>
            
        </Router>
    )
}

