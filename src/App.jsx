import { useState,useEffect } from 'react';
import './App.css';
import About from './components/AboutPage/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ContactPage from './components/ContactPage/ContactPage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import ExperiencePage from './components/ExperiencePage/ExperiencePage';
import EducationPage from './components/EducationPage/EducationPage';
import Header from './components/Header/Header';
import Achievements from './components/Achievements/Achievements';


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
    const transition = {
        duration: 0.5,
        delay: 0.5,
        ease: [0, 0.90, 0.5, 1.09],
    }

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
    <Header toggleMenu={toggleMenu} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main id='main-Container'>

      <DashboardPage transition={transition} />
      <About dimensions={dimensions} />
      <Achievements />
      <ExperiencePage activeTab={activeTab} handleTabClick={handleTabClick} />
      <Projects />
      <EducationPage EducationactiveTab={EducationactiveTab} handleEducationTabClick={handleEducationTabClick} Edudimensions={Edudimensions}  />
      <ContactPage />
    </main>
    <Footer />
    </>
  )
}

export default App
