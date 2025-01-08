import React, { useState } from 'react';
import './App.css'

function Navigation_Bar() {
  
const [menuOpen, setmenuOpen] = useState(false);
const toggleDown = () => {
  setmenuOpen(!menuOpen);
};
  return (
    <>
      <div className = "nav-bar">
        <div className = "left-nav-bar">
        <p>[NAME]</p>
        </div>

        <div className="hamburger-menu" onClick={toggleDown}>
          &#9776; 
        </div>
        

        <div className={`right-nav-bar ${menuOpen ? 'open' : ''}`}>
      <p>Experience</p>
      <p>Skills</p>
      <p>Projects</p>
      <p>Extracurriculars</p>

        </div>


      </div>

      
      
      
    </>
  )
}

function Introduction(){
  return(
    <div className="bio-container">
        <h2 class ="intro-words">
        I am a sophomore majoring in Computer Science at Boston University. I am passionate about technology and design and I’m interested in areas like software engineering (fullstack or frontend) and product management. With a strong passion for building technology that can solve meaningful problems, I am always seeking new opportunities to learn and grow. Apart from coding, i enjoy crotcheting, shopping, and watching movies and tv shows.
        </h2>

    </div>
  )
}

function Experience() {
  return (
    <div className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="company-exp">
        <img
          src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
          alt="Microsoft Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">Microsoft</h3>
          <p className="company-title">Software Engineer Intern</p>
          <p className="company-location">Redmond, WA</p>
          <p className="company-dates">May 2025 - August 2025</p>
        </div>
      </div>


      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E0BAQF_dzBw-N7N5A/company-logo_200_200/company-logo_200_200/0/1731981472766/management_leadership_for_tomorrow_logo?e=1744243200&v=beta&t=Hhc3o-FJfsJ5PyjJ-uROzaVTGrwu7_RzHygdS-k3sVk"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">MLT Ascend</h3>
          <p className="company-title">Student</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">August 2024 - Present</p>
        </div>
      </div>

      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQG2JeFuP6VNVQ/company-logo_200_200/company-logo_200_200/0/1652971578618/codepath_org_logo?e=1744243200&v=beta&t=wKdnuJCG8hHe0MpinutqfE4BPYefuUtHu6WA_2GiZQ8"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">CodePath</h3>
          <p className="company-title">Student</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">June 2024 - November 2024</p>
        </div>
      </div>

      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQF0OgQyRZ9yAA/company-logo_200_200/company-logo_200_200/0/1635782718446/capital_one_logo?e=1744243200&v=beta&t=ip8d9of-1ppspGHVqa39zJlm3HDoDJ0NmDbiylC33ng"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">Capital One</h3>
          <p className="company-title">Black and Hispanic Analyst Participant</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">July 2024 - August 2024</p>
        </div>
      </div>


      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/D560BAQGV36q2EowSyw/company-logo_200_200/company-logo_200_200/0/1724881581208/nvidia_logo?e=1744243200&v=beta&t=P092rjGwcwf83E1zx4Hr_SYCkiPH22rnbVZBvP6L9VM"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">NVIDIA</h3>
          <p className="company-title">Summer Bridge Program Participant</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">May 2024 - August 2024</p>
        </div>
      </div>



      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/D560BAQGRpJkMPxX80A/company-logo_200_200/company-logo_200_200/0/1721749851883/theknowledgehouse_logo?e=1744243200&v=beta&t=khhkeE40Jw978DNCdMhdUkTD5pDuuGbBH_Ig0gw1DOw"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">The Knowledge House</h3>
          <p className="company-title">KKCF Coding Fellow</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">July 2023 - July 2024</p>
        </div>
      </div>

      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/C4E0BAQFxM37ObjErsQ/company-logo_200_200/company-logo_200_200/0/1632229248406/wecodeharvard_logo?e=1744243200&v=beta&t=OkPJfZ5yOJ8WGKuSCAgIgjct4asj3m75FvpxANavu4g"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">Harvard WECODE</h3>
          <p className="company-title">Participant</p>
          <p className="company-location">Cambridge, MA</p>
          <p className="company-dates">February 2024 - February 2024</p>
        </div>
      </div>

      <div className="company-exp">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D0BAQEHUTYYyPFEhQ/company-logo_200_200/company-logo_200_200/0/1630509785189/girlswhocode_logo?e=1744243200&v=beta&t=G1VzqGWWuXrdxL-a2YBJ8r2oIW-dga_Q9NwNLfs7Y48"
          alt="KKCF Logo"
          className="company-img"
        />
        <div>
          <h3 className="company-name">Girls Who Code</h3>
          <p className="company-title">GWC Self-Paced Program Student</p>
          <p className="company-location">Remote</p>
          <p className="company-dates">July 2023 - August 2024</p>
        </div>
      </div>

    </div>
  );
}

function Skills(){
  return(
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-box">Skill 1</div>
        <div className="skill-box">Skill 2</div>
        <div className="skill-box">Skill 3</div>
        <div className="skill-box">Skill 4</div>
        <div className="skill-box">Skill 5</div>
        <div className="skill-box">Skill 6</div>
        <div className="skill-box">Skill 7</div>
        <div className="skill-box">Skill 8</div>
      </div>



    </div>
  );
}
<p>testing</p>


export default function App() {
  return (
    <div>
      <Navigation_Bar />
      <Introduction />
      <Experience />
      <Skills />
    </div>
  );
}
