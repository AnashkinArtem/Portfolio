import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from './navigations/About/About';
import Certificates from './navigations/Certificates/Certificates';
import Skills from './navigations/Skills/Skills';
import Applications from './navigations/Applications/Applications';

import styles from './navbar.module.scss'



const NavBar: React.FC = () => {

  const setActive = ({isActive} : {isActive: any}) => isActive ? 'active__link' : '';

  return (
    <>  
        <BrowserRouter>
        <div className={styles.navbar}>
        <div className={styles.navbar__wrapper}> 
            <NavLink to="/portfolio/" className={setActive}><span className={styles.navbar__link}>About</span></NavLink>
            <NavLink to="/portfolio/skills" className={setActive}><span className={styles.navbar__link}>Skills</span></NavLink>
            <NavLink to="/portfolio/certificates" className={setActive}><span className={styles.navbar__link}>Certificates</span></NavLink> 
            <NavLink to="/portfolio/applications" className={setActive}><span className={styles.navbar__link}>Apps</span></NavLink>
        </div>  
            <div className={styles.navbar__descr}>
              <Routes>
                  <Route path='/portfolio' element={<About/>}/>
                  <Route path='/portfolio/skills' element={<Skills/>}/>
                  <Route path='/portfolio/certificates' element={<Certificates/>}/>
                  <Route path='/portfolio/applications' element={<Applications/>}/>
              </Routes> 
            </div>      
        </div>
        </BrowserRouter>
    </>
  )
}

export default NavBar
