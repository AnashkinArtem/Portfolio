import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


import styles from './navbar.module.scss'
import About from './navigations/About';
import Certificates from './navigations/Certificates';
import Skills from './navigations/Skills';


const NavBar: React.FC = (): JSX.Element => {
  return (
    <>        <BrowserRouter>
        <div className={styles.navbar}>
        <div className={styles.navbar__wrapper}> 
            <Link to="/portfolio/" className={styles.navbar__link}>About me</Link>
            <Link to="/portfolio/skills" className={styles.navbar__link}>Skills</Link>
            <Link to="/portfolio/certificates" className={styles.navbar__link}>Certificates</Link> 
        </div>  
            <Routes>
                <Route path='/portfolio' element={<About/>}/>
                <Route path='/portfolio/skills' element={<Skills/>}/>
                <Route path='/portfolio/certificates' element={<Certificates/>}/>
            </Routes>       
        </div>
        </BrowserRouter>
    </>
  )
}

export default NavBar