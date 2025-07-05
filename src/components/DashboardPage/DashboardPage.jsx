import '../../App.css';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import {motion} from 'framer-motion';
const DashboardPage = ({transition}) => {
    const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 5,
    },
  },
};
	return (
		<motion.section id="main" 				
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 1 }}>
			<div>
				<h1 className="intro-1">Hi, my name is</h1>
			</div>
			<div>
				<h2 className="heading1">John wesly Uchula.</h2>
			</div>
			<div>
				<h3 className="heading1">I Build web & mobile apps.</h3>
			</div>
			<div>
				<p>I'm a Passionate Software Engineer and Coder</p>
				<p>
					Currently Working as a SDE-1 at{" "}
					<a href="https://www.jio.com/platforms/">Jio</a>{" "}
				</p>
			</div>

			<motion.div  
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="accounts">
				<motion.a href="https://github.com/johnwesly2002" target="_blank" variants={itemVariants}>
					<LuGithub size={35} className="accounts_icons" />
				</motion.a>
				<motion.a
					href="https://www.linkedin.com/in/johnwesly-u-a440ab215/"
					target="_blank"
                    variants={itemVariants}
				>
					<FiLinkedin size={35} className="accounts_icons" />
				</motion.a>
				<motion.a href="https://leetcode.com/u/JohnWeslyU/" target="_blank" variants={itemVariants} >
					<SiLeetcode size={35} className="accounts_icons" />
				</motion.a>
				<motion.a
					href="mailto:ujohnwesly8@gmail.com"
					target="_blank"
					className="Hire_button"
                    variants={itemVariants}
				>
					Hire Me
				</motion.a>
			</motion.div>
		</motion.section>
	);
};

export default DashboardPage;
