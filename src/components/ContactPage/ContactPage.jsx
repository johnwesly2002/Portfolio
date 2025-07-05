import React from "react";
import "../../App.css";
import Lottie from "react-lottie";
import Contact from "../../assets/Ani5.json";
import { motion } from "framer-motion";
const ContactPage = () => {
	return (
		<motion.section
			id="Contact"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2 className="Contactheading">Looks Interesting?</h2>
			<h2 className="ContactTitle">Get In Touch</h2>
			<p>
				I’m currently looking for any new interesting opportunities, my inbox is
				always open. Whether you have a question or just want to say hi, I’ll
				try my best to get back to you!
			</p>
			<a
				href="mailto:ujohnwesly8@gmail.com"
				target="_blank"
				className="Contact_button"
			>
				<span>Contact Me</span>
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: Contact,
						rendererSettings: {
							preserveAspectRatio: "xMidYMid slice",
						},
					}}
					height={30}
					width={40}
				/>
			</a>
		</motion.section>
	);
};

export default ContactPage;
