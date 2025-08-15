import { useState } from 'react';
import '../../App.css';
import './styles.css';
import Jio from '../../assets/Jio.jpg';
import Nineleaps from '../../assets/nineleaps.png';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 0,
    company: 'Jio Platforms Limited',
    role: 'SDE-1 (Angular, TypeScript)',
    image: Jio,
    link: 'https://www.jio.com/platforms/',
    location: 'Mumbai, India',
    range: 'Dec 2023 - Present',
    description: [
      'Worked on Angular and Typescript, fulfilled clients desired goals based on their requirements.',
      'Designed scalable and responsive web applications using Angular, increasing user engagement by 20%.',
      'Integrated REST APIs with front-end applications to provide seamless data flow between front-end and back-end.',
      'Collaborated with UI/UX teams to enhance application design and user experience.',
      'Conducted unit testing with Jest, ensuring high code quality and maintaining 95% test coverage.',
    ],
  },
  {
    id: 1,
    company: 'Nineleaps Technology Limited',
    role: 'React Native Developer Intern',
    image: Nineleaps,
    link: 'https://www.nineleaps.com/',
    location: 'Bangalore, India',
    range: 'Feb 2023 - Dec 2023',
    description: [
      'Delivered high-quality mobile applications using React Native, improving app performance by 25%.',
      'Implemented state management solutions with Redux, ensuring efficient debugging and development.',
      'Enhanced UI responsiveness across devices, leading to a 20% improvement in user satisfaction.',
      'Integrated unit testing frameworks like Jest, achieving 95% test coverage across modules.',
    ],
  },
];

const ExperienceCard = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      {isOpen && <div className="overlay" onClick={onToggle} />}

      <motion.div
        className={`card ${isOpen ? 'expanded' : ''}`}
        layout
        onClick={onToggle}
        initial={{ borderRadius: 5 }}
        animate={{
          width: isOpen ? '40vw' : '500px',
          height: isOpen ? '60vh' : '500px',
        }}
        transition={{ type: 'tween', stiffness: 200}}
      >
        <motion.img className="img" src={exp.image} alt="card" layout />
        <motion.div
          className="card-title"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {exp.company}
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <div className="right-description">
                <p>
                  <strong>{exp.role}</strong> at{' '}
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </p>
                <p className="location">{exp.location}</p>
                <p className="range">{exp.range}</p>
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const ExperiencePage = ({activeTab, handleTabClick}) => {

  return (
 <section id='Experience'>
      <h2 className='sectionheading'>Where I’ve Worked</h2>
      <div className="Experienceinner">
        <div className='ExperienceMenu'>
          <button onClick={() => handleTabClick(0)} aria-selected={activeTab === 0}><span>Jio Platforms Limited</span></button>
          <button onClick={() => handleTabClick(1)} aria-selected={activeTab === 1}><span>Nineleaps Technology Limited</span></button>
          <div className='TabIndex horizontal'></div>
        </div>

        <div className="ExperienceContent">
          {activeTab === 0 && (
            <div className="ExperienceContentInner" role="tabpanel">
              <h3><span>SDE-1 (Angular, TypeScript)</span> <span>at <a href="https://www.jio.com/platforms/" target="_blank" rel="noopener noreferrer">Jio</a></span></h3>
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
            <div className="ExperienceContentInner" role="tabpanel">
              <h3><span>React Native Developer Intern</span> <span>at <a href="https://www.nineleaps.com/" target="_blank" rel="noopener noreferrer">Nineleaps</a></span></h3>
              <p className="location">Bangalore, India</p>
              <p className="range">Feb 2023 - Dec 2023</p>
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
  );
};

export default ExperiencePage;
