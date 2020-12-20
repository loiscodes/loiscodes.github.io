import React, {Component} from 'react';
import {
  Link
} from "react-router-dom";

class MenuComponent extends Component{
render(){
    return (
      <nav>
      <ul class="header-menu-container">
      <li class="menuItem"> <Link to="/">Home</Link></li>
        <li class="menuItem"><Link to="/about">About</Link></li>
        <li class="menuItem"><Link to="/projects">Projects</Link></li>
        <li class="menuItem"><Link to="/knowledge">Knowledge Share</Link></li>
        <li class="menuItem"><Link to="/contact">Contact</Link></li>
        <li class="menuItem"><Link to="/support">Support</Link></li>
      </ul>
    </nav>

    )
}
}
// About, Contact, Experience, Career Growth
export default MenuComponent;