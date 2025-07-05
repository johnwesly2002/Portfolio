import '../../App.css';
import Lottie from 'react-lottie';
import Logo from '../../assets/Ani3.json';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineAlignRight} from 'react-icons/ai';
import {motion} from 'framer-motion';
import Resume from '../../assets/Johnwesly_Uchula_Resume.pdf'
const Header = ({toggleMenu,menuOpen, setMenuOpen}) => {
const defaultOptions = {
  loop: true,           
  autoplay: true,     
  animationData: Logo, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice', 
  }
}
  return (
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
      <motion.div className={`header_menucontent ${menuOpen ? 'show' : ''}`}>
      <AiOutlineClose className='header_close' onClick={toggleMenu} size={24}  />
        <motion.a  href='#About' onClick={() => setMenuOpen(false)} >About</motion.a>
        <motion.a  href='#Achievements' onClick={() => setMenuOpen(false)}>Achievements</motion.a>
        <motion.a  href='#Experience' onClick={() => setMenuOpen(false)}>Experience</motion.a>
        <motion.a  href='#Projects'onClick={() => setMenuOpen(false)}>Projects</motion.a>
        <motion.a  href='#Education' onClick={() => setMenuOpen(false)}>Education</motion.a>
        <motion.a  href='#Contact' onClick={() => setMenuOpen(false)}>Contact</motion.a>
        <motion.a  href={Resume} target='_blank' className='header_button'>Resume</motion.a>
      </motion.div>
      </div>
    </header>
  )
}

export default Header;
