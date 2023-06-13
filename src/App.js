import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from './pages/routes/routes'




function App() {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;