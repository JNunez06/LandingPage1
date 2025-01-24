import './App.css'

import { Navigation } from './Components/Navigation'
import {default as JsonData} from "./data/data.json";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Features } from './Components/Features';
import { Services } from './Components/Services';
import { Gallery } from './Components/Gallery';
import { Testimonials } from './Components/Testimonials';
import { Team } from './Components/Team';
import { Wbtn } from './Components/Wbtn';

function App() {

  const [pageData, setPageData] = useState({});

  useEffect(() => {
    setPageData(JsonData);
  }, []);
 
  return (
    <div className="App">
      <Navigation/>
      <Home />
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials/>
      <Team />
      <Contact />
      <Wbtn />
    </div>
  )
}

export default App
