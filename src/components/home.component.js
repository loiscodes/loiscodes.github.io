import React, {Component} from 'react';
import '../index.css';

class HomeComponent extends Component {

    render(){
        return (
          <div className="hero-section-container">
          <section id="hero-section" className="split-section">
          
          </section>
            <section className="split-section">
              <div className="hero-title">
                <span className="the-largest-size">
              It's me. </span><span className="emphasis">LOIS</span>
              <h1>Site In Development.</h1> 

              </div>

            <div className="socials">
            <a href="https://youtube.com/channel/UCNKMWBhe6U8ZZ2fJSggdzsA" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/youtube.svg" alt="YouTube" /></a>
            <a href="http://fb.com/loiscodes" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/facebook.svg" alt="Facebook Page" /></a>
            <a href="http://instagram.com/lois_codes" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/instagram.svg" alt="Instagram" /></a>
            <a href="http://twitter.com/loiscodes" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/twitter.svg" alt="Twitter" /></a>
            <a href="http://dev.to/loiscodes" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/dev.svg" alt="Dev.to" /></a>
            <a href="https://linkedin.com/in/loisharris" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://drive.google.com/file/d/1b9JqTNtKDfWroMMAN4COt1uaW4DRaqny/view?usp=sharing" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/50/e9c46a/open-resume.png" alt="Download Resume" id="download-resume" /></a>
            </div>

  
          </section>
          </div>
        )
    }
}

export default HomeComponent;

/*
<img src="https://img.icons8.com/dotty/250/e9c46a/open-resume.png" alt="Download Resume" id="download-resume" onClick={openNewTab("")} />
            <img src="https://img.icons8.com/windows/250/e9c46a/youtube.svg" alt="YouTube" onClick={)}/>
            <img src="https://img.icons8.com/windows/250/e9c46a/facebook.svg" alt="Facebook Page" onClick={openNewTab("")}/>
            <img src="https://img.icons8.com/windows/250/e9c46a/instagram.svg" alt="Instagram" onClick={openNewTab("")}/>
            <img src="https://img.icons8.com/windows/250/e9c46a/twitter.svg" alt="Twitter" onClick={openNewTab("")}/>
            <img src="https://img.icons8.com/windows/45/e9c46a/dev.svg" alt="Dev.to" onClick={openNewTab("")}/>
*/