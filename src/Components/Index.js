import React from 'react'
import NavBar from './NavBar';
import Sectionone from './Sectionone'
import '../Style/MyStyle.css';
import Sectiontwo from './Sectiontwo';
import Sectionfour from './Sectionfour';
import Sectionsix from './Sectionsix';
import Footer from './Footer';
import Sectionfive from './Sectionfive';
import Sectionthree from './Sectionthree';
export default function Index() {
  return (
    <div>
      <div className='app-div'>
      <NavBar/>
    <Sectionone/>
    </div>
    <Sectiontwo/>
    <Sectionthree/>
     <Sectionfour/>
     <Sectionfive/>
    <Sectionsix/>
   <Footer/>
    
    </div>
  )
}
