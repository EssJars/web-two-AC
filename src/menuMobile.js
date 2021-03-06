import React, {useRef, useEffect} from 'react';
import Profile from './images/profile.jpg'
import styled from 'styled-components'
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import App from './App';
import AcercaDeMi from './acercade'
import AcercaTwo from './acercadetwo';
import Experience from './experience';
import SkillSection from './skillSection'

const Hamburguer = styled.div`
  #nav-icon3 {
    width: 35px;
    height: 30px;
    margin: 25px auto;
    position: fixed;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}
#nav-icon3 span {
  display: block;
  position: absolute;
  height: 3.5px;
  width: 100%;
  background: #6196E4;
  border-radius: 9999px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 20px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
`
const GlassMenu = styled.div`
  backdrop-filter: blur(5px) saturate(200%);
  --webkit-backdrop-filter: blur(5px) saturate;
  background-color: rgba(2,2,21,0.8);
  border-radius: 0;
`

const MenuMobile = () => {

    const menuRef = useRef(null)
    const menuMobileRef = useRef(null)
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const experienceRef = useRef(null)
    const skillsRef = useRef(null)

    useEffect(() => {
        menuRef.current.addEventListener("click", () => {
          menuRef.current.classList.toggle('open')
          menuMobileRef.current.classList.toggle('-translate-x-full')
        })
        homeRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        aboutRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        experienceRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        skillsRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        
    }, [homeRef,aboutRef,experienceRef,skillsRef,menuRef,menuMobileRef])

    return(
    <Router>
      <div className="fixed transform -translate-y-1/2 right-12 sm:top-0 block desktop:hidden z-50">
          <Hamburguer>
              <div 
              ref={menuRef}
              id="nav-icon3"
              className="navActive"
              >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </Hamburguer>
      </div>
      <GlassMenu
          ref={menuMobileRef}
          className="bg-themeDarkBlue text-white w-60 
                      py-14 fixed inset-y-0 left-0 transform
                      -translate-x-full block desktop:hidden z-50
                      transition duration-1000 ease-in-out border-themeBlue border-r-4"
        >
          <div className="flex justify-center">
            <img src={Profile} className="rounded-full w-28 h-28 border-4 border-themeBlue"/>
          </div>
          <h1 className="text-2xl font-extrabold text-themeBlue flex justify-center mb-14 mt-4">
            Angel Ramirez
          </h1>
    

            <nav>
              <Link
                ref={homeRef}
                to="/"
                className="py-4 flex justify-center transition
                          duration-500 hover:bg-themeBlue hover:text-themeDarkBlue
                          border-t border-b border-opacity-10 border-themeBlue"
              >
              Inicio
              </Link>
              <Link
                ref={aboutRef}
                to="/Acerca"
                className="py-4 flex justify-center transition
                          duration-500 hover:bg-themeBlue hover:text-themeDarkBlue
                          border-t border-b border-opacity-10 border-themeBlue"
              >
              Acerca de Mi
              </Link>
              <Link
                ref={experienceRef}
                to="/Experiencia"
                className="py-4 flex justify-center transition
                          duration-500 hover:bg-themeBlue hover:text-themeDarkBlue
                          border-t border-b border-opacity-10 border-themeBlue"
              >
              Experiencia
              </Link>
              <Link
                ref={skillsRef}
                to="/Habilidades"
                className="py-4 flex justify-center transition
                          duration-500 hover:bg-themeBlue hover:text-themeDarkBlue
                          border-t border-b border-opacity-10 border-themeBlue"
              >
              Habilidades
              </Link>
            </nav>
        </GlassMenu>
        <Switch>
          <Route path="/" exact>
            <App/>
          </Route>
          <Route path="/Acerca">
            <AcercaDeMi/>
            <AcercaTwo/>
          </Route>
          <Route path="/Experiencia">
            <Experience/>
          </Route>
          <Route path="/Habilidades">
            <SkillSection/>
          </Route>
        </Switch>
    </Router>
    )
}
 
export default MenuMobile;