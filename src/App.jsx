import { useState } from 'react';
import './App.css';
import logo from './assets/react.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineAlignRight} from 'react-icons/ai';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Resume from './assets/Johnwesly_Uchula_Resume.pdf'
import Profile from './assets/professional_Profile.jpeg'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [EducationactiveTab, setEducationActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    const tabIndexElement = document.querySelector('.TabIndex');
    if (tabIndexElement) {
        tabIndexElement.style.transform = `translateY(calc(${index} * var(--tab-height)))`;
        tabIndexElement.style.transition = `transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s`;
    }
};
const handleEducationTabClick = (index) => {
  setEducationActiveTab(index);
  const tabIndexElement = document.querySelector('.EducationTabIndex');
  if (tabIndexElement) {
      tabIndexElement.style.transform = `translateY(calc(${index} * var(--tab-height)))`;
      tabIndexElement.style.transition = `transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s`;
  }
};

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
    <header>
      <div className='header_content'>
        <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>Logo</title>
        <rect class="border" x="2" y="2" width="96" height="96" rx="10" ry="10"/>
        
        <path class="letter-j"
              d="M 60,30 L 40,30 L 40,60 L 30,60 L 30,50 L 20,50 L 20,65 
                 L 40,75 L 60,65 L 60,50 L 50,50 L 50,60 L 40,60 Z" />
    </svg>
        </a>
        <AiOutlineAlignRight 
          className='header_menuicon'
          onClick={toggleMenu}
          size={28} 
        />
      <div className={`header_menucontent ${menuOpen ? 'show' : ''}`}>
      <AiOutlineClose className='header_close' onClick={toggleMenu} size={24}  />
        <a href='#About' onClick={() => setMenuOpen(false)} >About</a>
        <a href='#Experience' onClick={() => setMenuOpen(false)}>Experience</a>
        <a href='#Projects'onClick={() => setMenuOpen(false)}>Projects</a>
        <a href='#Education' onClick={() => setMenuOpen(false)}>Education</a>
        <a href='#Contact' onClick={() => setMenuOpen(false)}>Contact</a>
        <a href={Resume} target='_blank' className='header_button'>Resume</a>
      </div>
      </div>
    </header>
    <main>
      <section id='main'>
        <div >
          <h1 className='intro-1'>Hi, my name is</h1>
        </div>
        <div >
          <h2 className='heading1'>John wesly Uchula.</h2>
        </div>
        <div >
          <h3 className='heading1'>I Build  web & mobile apps.</h3>
        </div>
        <div >
         <p>I'm a Passionate Software Engineer and Coder</p>
         <p>Currently Working as a SDE-1 at <a href='https://www.jio.com/platforms/'>Jio</a> </p>
        </div>
        
        <div className='accounts'>
        <a href="https://github.com/johnwesly2002" target='_blank'><LuGithub size={35} className='accounts_icons' /></a>
        <a href="https://www.linkedin.com/in/johnwesly-u-a440ab215/" target='_blank'><FiLinkedin size={35} className='accounts_icons'  /></a>
        <a href="https://leetcode.com/u/JohnWeslyU/" target='_blank'><SiLeetcode size={35} className='accounts_icons'  /></a>
        <a href='mailto:ujohnwesly8@gmail.com' target='_blank' className='Hire_button'>Hire Me</a>
        </div>
      </section>
      <section id='About'>
      <h2 className='sectionheading'>About Me</h2>
      <div className='AboutInnerSection'>
        <div className="AboutContent">
          <p>Hello! My name is Johnwesly Uchula. A Mobile & web app developer, who loves exploring and building new things.
          <br></br>I'm currently working as a SDE-1 at Jio specialized in Frontend Developement with <a>Angular</a> and <a>TypeScript</a></p>
          <p>Here are a few technologies & Frameworks I love to work with:</p>
          <ul className='AboutTechs'>
            <li>React Native</li>
            <li>React</li>
            <li>Angular</li>
            <li>Flutter</li>
            <li>Tailwind</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="AboutImage">
          <img className='Profile_Image' src={Profile} alt="Profile" />
        </div>
      </div>
      </section>
      <section id='Experience'>
      <h2 className='sectionheading'>Where I’ve Worked</h2>
      <div className="Experienceinner">
      <div className='ExperienceMenu'>
                <button 
                    onClick={() => handleTabClick(0)} 
                    tabIndex={activeTab === 0 ? 0 : -1}
                    aria-selected={activeTab === 0}
                >
                    Jio
                </button>
                <button 
                    onClick={() => handleTabClick(1)} 
                    tabIndex={activeTab === 1 ? 0 : -1}
                    aria-selected={activeTab === 1}
                >
                    Nineleaps
                </button>
                <div className='TabIndex'></div>
            </div>

            <div className="ExperienceContent">
                {activeTab === 0 && (
                    <div id="panel-0" className="ExperienceContentInner" role="tabpanel">
                    <h3>
                        <span>SDE-1 (Angular, TypeScript)</span>
                        <span>&nbsp;at &nbsp;
                            <a href="https://www.jio.com/platforms/" target="_blank" rel="noopener noreferrer">Jio</a>
                        </span>
                    </h3>
                    <p className="location">Mumbai, India</p>
                    <p className="range">Dec 2023 - Present</p>
                    <ul>
                        <li>Worked on Angular and Typescript, fulfilled clients desired goals based on their requirements.</li>
                        <li>Designed scalable and responsive web applications using Angular, increasing user engagement by 20%.</li>
                        <li>Integrated REST APIs with front-end applications to provide seamless data flow between front-end and back-end.</li>
                        <li>Collaborated with UI/UX teams to enhance application design and user experience.</li>
                        <li>Conducted unit testing with Jest, ensuring high code quality and maintaining 95% test coverage.</li>

                    </ul>
                </div>
                )}

                {activeTab === 1 && (
                    <div id="panel-1" className="ExperienceContentInner" role="tabpanel">
                    <h3>
                        <span>React Native Developer Intern</span>
                        <span className="company">&nbsp;at&nbsp;
                            <a href="https://www.nineleaps.com/" target="_blank" rel="noopener noreferrer">Nineleaps</a>
                        </span>
                    </h3>
                    <p className="location">Bangalore, India</p>
                    <p className="range">February 2023 - December 2023</p>
                    <ul>
                        <li>Delivered high-quality mobile applications using React Native, improving app performance by 25%.</li>
                        <li>Implemented state management solutions with Redux, ensuring efficient debugging and development.</li>
                        <li>Enhanced UI responsiveness across devices, leading to a 20% improvement in user satisfaction.</li>
                        <li>Integrated unit testing frameworks like Jest, achieving 95% test coverage across modules.</li>

                    </ul>
                </div>
                )}
            </div>
        </div>
      </section>
      <section id='Projects'>

      </section>
      <section id='Education'>
      <h2 className='sectionheading'>Where I’ve Studied</h2>

      <div className="Educationinner">
      <div className='EducationMenu'>
                <button 
                    onClick={() => handleEducationTabClick(0)} 
                    tabIndex={EducationactiveTab === 0 ? 0 : -1}
                    aria-selected={EducationactiveTab === 0}
                >
                    Aditya University
                </button>
                <button 
                    onClick={() => handleEducationTabClick(1)} 
                    tabIndex={EducationactiveTab === 1 ? 0 : -1}
                    aria-selected={EducationactiveTab === 1}
                >
                    Sri Chaitanya Junior College
                </button>
                <button 
                    onClick={() => handleEducationTabClick(2)} 
                    tabIndex={EducationactiveTab === 2 ? 0 : -1}  
                    aria-selected={EducationactiveTab === 2} 
                  >
                    Gowtham Model School
                </button>
                <div className='EducationTabIndex'></div>
            </div>

            <div className="EducationContent">
                {EducationactiveTab === 0 && (
                    <div id="panel-0" className="EducationContentInner" role="tabpanel">
                    <h3>
                        <span>Bachelor of Technology</span>
                        <span>&nbsp;@ &nbsp;
                            <a href="https://adityauniversity.in/" target="_blank" rel="noopener noreferrer">Aditya University</a>
                        </span>
                    </h3>
                    <p className="location">Kakinada, India</p>
                    <p className="range">June 2019 - May 2023</p>
                    <ul>
                        <li>Branch - CSE (Computer Science and Engineering).</li>
                        <li>8.67 CGPA </li>
                        <li>University - Jawaharlal Nehru Technological University, Kakinada.</li>
                        <li>Medium English.</li>
                    </ul>
                </div>
                )}

                {EducationactiveTab === 1 && (
                    <div id="panel-1" className="EducationContentInner" role="tabpanel">
                    <h3>
                    <span>Senior Secondary Education - Intermediate</span>
                        <span>&nbsp;@&nbsp;
                            <a href="https://adityauniversity.in/" target="_blank" rel="noopener noreferrer">Sri Chaitanya Junior College</a>
                        </span>
                    </h3>
                    <p className="location">Razole, India</p>
                    <p className="range">June 2016 - April 2018</p>
                    <ul>
                        <li>Board - Andhra Pradesh Board of Intermediate Education (APBIE).</li>
                        <li>8.90 CGPA</li>
                        <li>Stream - Mathematics & Science.</li>
                        <li>Medium - English, Sanskrit(II).</li>

                    </ul>
                </div>
                )}
                {EducationactiveTab === 2 && (
                    <div id="panel-1" className="EducationContentInner" role="tabpanel">
                    <h3>
                        <span>Secondary Education</span>
                        <span className="company">&nbsp;@ &nbsp;
                            <a href="https://www.nineleaps.com/" target="_blank" rel="noopener noreferrer">Gowtham Model School</a>
                        </span>
                    </h3>
                    <p className="location">Malkipuram, India</p>
                    <p className="range">June 2015 - April 2016</p>
                    <ul>
                        <li>Board - Board of Secondary Education of Andhra Pradesh.</li>
                        <li>9.3 CGPA</li>
                        <li>Medium - English, Hindi(II).</li>

                    </ul>
                </div>
                )}
            </div>
        </div>
      </section>
      <section id='Contact'>

      </section>
    </main>
    </>
  )
}

export default App
