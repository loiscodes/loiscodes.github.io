import React, {Component} from 'react';

import HomeComponent from "./home.component";
class MainComponent extends Component{
render(){
    return (
      <>
        <HomeComponent />  
      </>
    )
}
}
// About, Contact, Experience, Career Growth
export default MainComponent;
/*
        <nav>
        <ul class="header-menu-container">
        <li class="home">Home</li>
          <li class="about">About</li>
          <li class="projects">Projects</li>
          <li class="knowledgeShare">Knowledge Share</li>
          <li class="contact">Contact</li>
          <li class="support">support</li>
        </ul>
      </nav>
*/