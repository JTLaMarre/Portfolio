import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="hero-head">
      <div className="navbar is-dark">
         <div className="container">
            <label
               role="button"
               className="navbar-burger burger"
               aria-label="menu"
               aria-expanded="false"
               htmlFor="nav-toggle-state"
            >
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               <span aria-hidden="true" ></span>
            </label>
               <input type="checkbox" id="nav-toggle-state"/>
         </div>

         <div className="navbar-menu">

            <div className="navbar-menu">
               <div className="navbar-start">
                  <NavLink className="navbar-item is-active" to="/">Home</NavLink>
                  <NavLink className="navbar-item is-active" to="/portfolio">portfolio</NavLink>
                  <NavLink className="navbar-item is-active" to="/contact">Contact</NavLink>
               </div>
            </div>
         </div>
      </div>
      </div>
   );
}

export default Navigation;