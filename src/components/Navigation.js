import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './comp.css'
const Navigation = () => {
   const [isActive, setisActive]= useState(false)
   return (
      <div className="hero-head">
      <div className="navbar is-dark">
         <div className="container">
         <label
              role="button"
              className={`navbar-burger burger is-dark ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              htmlFor="nav-toggle-state"
              
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" />

         

            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
               <div className="navbar-start">
                  <NavLink className="navbar-item is-active" to="/" onClick={() => {
            setisActive(!isActive);
          }}>Home</NavLink>
                  <NavLink className="navbar-item is-active" to="/portfolio"
                  onClick={() => {
            setisActive(!isActive);
          }}>portfolio</NavLink>
                  <NavLink className="navbar-item is-active" to="/contact" onClick={() => {
            setisActive(!isActive);
          }}>Contact</NavLink>
               </div>
            </div>
         </div>
      </div>
      
   );
}

export default Navigation;