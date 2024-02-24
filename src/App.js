import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import { IoIosSchool } from 'react-icons/io';
// import { HiOutlineHome } from 'react-icons/hi';
// import { TbTool} from 'react-icons/tb';

import Main from './components/Main';
import Education from './components/Education';

import Skill from './components/Skill';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

import './components/style.css'
import './assets/css/reset.css'
import ScrolltoTopButton from './components/ScrolltoTopButton';



const App = () => {
  return (
    <BrowserRouter>
    <>
    <Navbar />
     <Routes>
      <Route path = "/" element = {<Main/>} />
      <Route path = "/edu" element = {<Education/>} />
      <Route path = "/skill" element = {<Skill/>} />
      <Route path = "/project" element = {<Resume/>} />
     </Routes>
     <ScrolltoTopButton />

    </>
    </BrowserRouter>
  );
};

export default App;

     {/* <li><Link to = "/"><HiOutlineHome size={40}/></Link></li>
        <li><Link to = "/edu"><IoIosSchool size={40}/></Link></li>
        <li><Link to = "/skill"><TbTool size={40}/></Link></li>
        <li><Link to = "/resume"><IoIosSchool size={40}/></Link></li> */}