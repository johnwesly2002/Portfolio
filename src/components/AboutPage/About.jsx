import "../../App.css";
import Lottie from "react-lottie";
import {motion} from "framer-motion";
import AboutImage from "../../assets/Ani2.json";
const About = ({ dimensions }) => {
		return (
			<section
				id="About"
			>
				<h2 className="sectionheading">About Me</h2>
				<div className="AboutInnerSection">
					<div className="AboutContent">
						<p>
							Hello! My name is Johnwesly Uchula. A Mobile & web app developer,
							who loves exploring and building new things.
							<br></br>I'm currently working as a SDE-1 at Jio specialized in
							Frontend Developement with <a>Angular</a> and <a>TypeScript</a>
						</p>
						<p>Here are a few technologies & Frameworks I love to work with:</p>
						<ul className="AboutTechs">
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
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData: AboutImage,
								rendererSettings: {
									preserveAspectRatio: "xMidYMid slice",
								},
							}}
							height={dimensions.height}
							width={dimensions.width}
						/>
					</div>
				</div>
			</section>
		);
};

export default About;
