import React, {Component} from 'react';
import '../index.css';

class HomeComponent extends Component {

    render(){
      const openNewTab = (link)=> {
        console.log(link);
        window.open(link, "_tab")
          };
        return (
            <section id="hero-section" className="hero-section-container">
            <span className="the-largest-size">
              It's me. <span className="emphasis">LOIS</span></span>

            <div className="socials">
            <a href onClick={() => openNewTab("https://youtube.com/channel/UCNKMWBhe6U8ZZ2fJSggdzsA")}><img src="https://img.icons8.com/windows/150/e9c46a/youtube.svg" alt="YouTube" /></a>
            <a href onClick={() => openNewTab("http://fb.com/loiscodes")}><img src="https://img.icons8.com/windows/150/e9c46a/facebook.svg" alt="Facebook Page" /></a>
            <a href onClick={() => openNewTab("http://instagram.com/lois_codes")}><img src="https://img.icons8.com/windows/150/e9c46a/instagram.svg" alt="Instagram" /></a>
            <a href onClick={() => openNewTab("http://twitter.com/loiscodes")}><img src="https://img.icons8.com/windows/150/e9c46a/twitter.svg" alt="Twitter" /></a>
            <a href onClick={() => openNewTab("http://dev.to/loiscodes")}><img src="https://img.icons8.com/windows/150/e9c46a/dev.svg" alt="Dev.to" /></a>
            <a href onClick={() => openNewTab("https://linkedin.com/in/loisharris")}><img src="https://img.icons8.com/windows/150/e9c46a/linkedin.svg" alt="LinkedIn" /></a>
            <a href onClick={() => openNewTab("https://drive.google.com/file/d/1b9JqTNtKDfWroMMAN4COt1uaW4DRaqny/view?usp=sharing")}><img src="https://img.icons8.com/windows/150/e9c46a/open-resume.png" alt="Download Resume" id="download-resume" /></a>
            </div>
            <h1>Site coming soon.</h1>
  
          </section>
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