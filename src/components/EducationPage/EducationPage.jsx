import "../../App.css";
import Lottie from 'react-lottie';
import EducationAnimation from '../../assets/Ani6.json';
import { motion } from "framer-motion";
const EducationPage = ({ EducationactiveTab, handleEducationTabClick, Edudimensions }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EducationAnimation,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  return (
    <motion.section id='Education' 
    	initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}>
      <h2 className='sectionheading'>Where I’ve Studied</h2>
      <div className="Educationinner">
        <div className='EducationMenu'>
          {['Aditya University', 'Sri Chaitanya Junior College', 'Gowtham Model School'].map((name, index) => (
            <button
              key={index}
              onClick={() => handleEducationTabClick(index)}
              aria-selected={EducationactiveTab === index}
            >
              <span>{name}</span>
            </button>
          ))}
          <div className='EducationTabIndex horizontal'></div>
        </div>

        <div className="EducationContent">
          {EducationactiveTab === 0 && (
            <div className="EducationContentInner" role="tabpanel">
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
            <div className="EducationContentInner" role="tabpanel">
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
            <div className="EducationContentInner" role="tabpanel">
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
          <Lottie options={defaultOptions} height={Edudimensions.height} width={Edudimensions.width} />
        </div>
      </div>
    </motion.section>
  );
};

export default EducationPage;
