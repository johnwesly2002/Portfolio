import { useState,useEffect } from 'react';
import './App.css';
import logo from './assets/react.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineAlignRight} from 'react-icons/ai';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaRegFolder } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import Resume from './assets/Johnwesly_Uchula_Resume.pdf'
import Profile from './assets/professional_Profile.jpeg';
import Lottie from 'react-lottie';
import Logo from './assets/Ani3.json';
import AboutImage from './assets/Ani2.json';
import footerImg from './assets/Ani1.json';
import Contact from './assets/Ani5.json';
import Education from './assets/Ani6.json';

const handleTabUpdate  = (index, Tabclass) => {
  const tabIndexElement = document.querySelector(Tabclass);
  if (tabIndexElement) {
    const isTabWidth = window.innerWidth <= 600; 
    const transformValue = isTabWidth
      ? `
      top: auto;
      bottom: 0px;
      width: 100%;
      max-width: var(--tab-width);
      height: 2px;
      margin-left: 50px;
      transform: translateX(calc(${index} * var(--tab-width)))` 
      : `
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 10;
      width: 2px;
      height: var(--tab-height);
      border-radius: var(--border-radius);
      background: var(--hovercolor);
      transform: translateY(calc(${index} * var(--tab-height)))`; 

    tabIndexElement.style = transformValue;
    tabIndexElement.style.transition = `transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s`;
  }
};
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [EducationactiveTab, setEducationActiveTab] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
  const [Edudimensions, setEduDimensions] = useState({ width: 600, height: 400 });

  const handleTabClick = (index) => {
    setActiveTab(index);
    handleTabUpdate(index,'.TabIndex');
  };
  const handleEducationTabClick = (index) => {
    setEducationActiveTab(index);
    handleTabUpdate(index,'.EducationTabIndex');
  };
  const updateSize = () => {
    const width = window.innerWidth;
    if (width <= 300) {
      setDimensions({ width: 200, height: 200 });
    } else if (width <= 500) {
      setDimensions({ width: 300, height: 200 });
    } 
    else if (width <= 650) {
      setDimensions({ width: 450, height: 400 });
    }else if (width <= 768) {
      setDimensions({ width: 600, height: 450 });
    }
    else if (width <= 840) {
      setDimensions({ width: 400, height: 280 });
    } 
    else if (width <= 940) {
      setDimensions({ width: 500, height: 350 });
    } else {
      setDimensions({ width: 600, height: 400 });
    }
  };
  const EdupdateSize = () => {
    const width = window.innerWidth;
    if (width <= 300) {
      setEduDimensions({ width: 200, height: 200 });
    } else if (width <= 500) {
      setEduDimensions({ width: 300, height: 200 });
    } 
    else if (width <= 650) {
      setEduDimensions({ width: 300, height: 200 });
    }else if (width <= 768) {
      setEduDimensions({ width: 300, height: 200 });
    }
    else if (width <= 840) {
      setEduDimensions({ width: 300, height: 200 });
    } 
    else if (width <= 940) {
      setEduDimensions({ width: 350, height: 250 });
    }else if (width <= 1030) {
      setEduDimensions({ width: 350, height: 250 });
    }else if (width <= 1140) {
      setEduDimensions({ width: 300, height: 350 });
    } else {
      setEduDimensions({ width: 600, height: 400 });
    }
  };
  useEffect(() => {
    const handleResize = () => handleTabUpdate(activeTab,'.TabIndex');
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);
  useEffect(() => {
    const handleResize = () => handleTabUpdate(EducationactiveTab,'.EducationTabIndex');
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [EducationactiveTab]);
  useEffect(() => {
    const handleResize = () => {
      updateSize();
    };
    const EduhandleResize = () => {
      EdupdateSize();
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", EduhandleResize);
    EdupdateSize();
    updateSize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", EduhandleResize);
    };

  }, []);
const defaultOptions = {
  loop: true,           
  autoplay: true,     
  animationData: Logo, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice', 
  }
};

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
    <header>
      <div className='header_content'>
        <a href="/">
        <Lottie   options={defaultOptions} height={50} width={70} />
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
    <main id='main-Container'>
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
          <Lottie options={{
             loop: true,           
             autoplay: true,     
             animationData: AboutImage, 
             rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice', 
             }
          }} height={dimensions.height}
          width={dimensions.width} />
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
                    <span>Jio Platforms Limited</span>
                </button>
                <button 
                    onClick={() => handleTabClick(1)} 
                    tabIndex={activeTab === 1 ? 0 : -1}
                    aria-selected={activeTab === 1}
                >
                    <span>Nineleaps Technology Limited</span>
                </button>
                
                <div className='TabIndex horizontal'></div>
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
      <section id='Projects' className='Projects'>
      <h2 className='projectsectionheading'>Projects</h2>
      <ul className='projects-container'>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                <a href='https://github.com/johnwesly2002/SnapWallet'><LuGithub className='ProjectIcon' size={30} /></a>
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Snap Wallet</a>
            </h3>
            <div className="project-description">
              <p>Designed a secure digital wallet with real-time transaction tracking and analytics</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Realm</li>
              </ul>
            </div>
          </div>
        </li>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                <a href='https://github.com/johnwesly2002/Talks'><LuGithub className='ProjectIcon' size={30} /></a>
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Talks</a>
            </h3>
            <div className="project-description">
              <p> Developed real-time messaging features supporting multimedia file sharing with Firebase</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>Flutter</li>
                <li>Dart</li>
                <li>Firebase</li>
                <li>Google Cloud</li>
              </ul>
            </div>
          </div>
        </li>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                {/* <a href=''><LuGithub size={10} /></a> */}
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Leap</a>
            </h3>
            <div className="project-description">
              <p>Built an e-commerce platform for renting clothes, integrating secure payment gateways.</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Spring Boot</li>
              </ul>
            </div>
          </div>
        </li>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                <a href='https://github.com/johnwesly2002/Portfolio'><LuGithub className='ProjectIcon' size={30} /></a>
                <a href='https://johnwesly-profiolo.netlify.app/'><GoLinkExternal size={30} /></a>
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Profiolo</a>
            </h3>
            <div className="project-description">
              <p>Designed a Personal website for Showcasing my work and achivements using React and vanilla css</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>React</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </li>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                <a href='https://github.com/johnwesly2002/Nike-website'><LuGithub className='ProjectIcon' size={30} /></a>
                <a href='https://nike-website-by-john.netlify.app/#'><GoLinkExternal className='ProjectIcon' size={30} /></a>
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Nike Website</a>
            </h3>
            <div className="project-description">
              <p>Designed a Nike Website using Tailwind and Javascript for Explore the dynamic css through Tailwind CSS.</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>Tailwind</li>
                <li>CSS</li>
                <li>Parcel</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </li>
        <li className='projectLi'>
          <div className="projectbox">
            <header>
              <div className="projectTop">
                <div className="folder">
                <CiFolderOn className='ProjectIcon' size={30} />
                </div>
                <div className="projectLinks">
                <a href='https://github.com/johnwesly2002/React-countries'><LuGithub className='ProjectIcon' size={30} /></a>
                </div>
              </div>
            </header>
            <h3 className='project-title'>
              <a target='_blank' rel='noopener noreferrer'>Explore Countries</a>
            </h3>
            <div className="project-description">
              <p>Designed and Developed a Project to Explore the Countries and their neighbour Countries based on Regions and continents.</p>
            </div>
            <div className="footer">
              <ul className="project-tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

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
                    <span>Aditya University</span>
                </button>
                <button 
                    onClick={() => handleEducationTabClick(1)} 
                    tabIndex={EducationactiveTab === 1 ? 0 : -1}
                    aria-selected={EducationactiveTab === 1}
                >
                    <span>Sri Chaitanya Junior College</span>
                </button>
                <button 
                    onClick={() => handleEducationTabClick(2)} 
                    tabIndex={EducationactiveTab === 2 ? 0 : -1}  
                    aria-selected={EducationactiveTab === 2} 
                  >
                   <span> Gowtham Model School</span>
                </button>
                <div className='EducationTabIndex horizontal'></div>
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
                  <li>Board - Board of Secondary Education of Andhra Pradesh (SSC).</li>
                  <li>9.3 CGPA</li>
                  <li>Medium - English, Hindi(II).</li>

              </ul>
          </div>
          )}
      </div>
     <div className='EducationImage'>
     <Lottie options={{
        loop: true,           
        autoplay: true,     
        animationData: Education, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', 
        }
      }} height={Edudimensions.height} width={Edudimensions.width} /> 
     </div>
      </div>
      </section>
      <section id='Contact'>
      <h2 className='Contactheading'>Looks Interesting?</h2>
      <h2 className='ContactTitle'>Get In Touch</h2>
      <p>I’m currently looking for any new interesting opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <a href='mailto:ujohnwesly8@gmail.com' target='_blank' className='Contact_button'><span>Contact Me</span> 
        <Lottie options={{
           loop: true,           
           autoplay: true,     
           animationData: Contact, 
           rendererSettings: {
             preserveAspectRatio: 'xMidYMid slice', 
           }
        }} height={30} width={40} />
      </a>
      </section>
    </main>
    <footer>
      <p>Designed and Made By&nbsp;</p>
      <p>John wesly Uchula</p>
      <div className='lottie'>
      <Lottie options={{
         loop: true,           
         autoplay: true,     
         animationData: footerImg, 
         rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice', 
         }
      }} height={30} width={50} />
      </div>
    </footer>
    </>
  )
}

export default App
