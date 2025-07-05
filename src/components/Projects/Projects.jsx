import "../../App.css";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import { motion } from "framer-motion";
const Projects = () => {
	return (
		<motion.section
			id="Projects"
			className="Projects"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2 className="projectsectionheading">Projects</h2>
			<ul className="projects-container">
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/SnapWallet">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								Snap Wallet
							</a>
						</h3>
						<div className="project-description">
							<p>
								Designed a secure digital wallet with real-time transaction
								tracking and analytics
							</p>
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
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/Talks">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								Talks
							</a>
						</h3>
						<div className="project-description">
							<p>
								{" "}
								Developed real-time messaging features supporting multimedia
								file sharing with Firebase
							</p>
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
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/SnapReply">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
									{/* <a href="https://snapsearch-by-john.netlify.app/">
										<GoLinkExternal size={30} />
									</a> */}
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								SnapReply
							</a>
						</h3>
						<div className="project-description">
							<p>
								A Email AI-Writing Assistant for Quick Quick and Fast Replies developed using spring boot and React
								with chrome Extension for fast gmail replies.
							</p>
						</div>
						<div className="footer">
							<ul className="project-tech-list">
								<li>React</li>
								<li>Java</li>
								<li>Springboot</li>
								<li>mySQL</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/HyperTrace">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
									<a href="https://willowy-druid-3c17c1.netlify.app/">
										<GoLinkExternal size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								HyperTrace
							</a>
						</h3>
						<div className="project-description">
							<p>
								Links shorten Project developed using React and Spring boot  that takes long, unwieldy URLs and converts them into short, easy-to-share links.
							</p>
						</div>
						<div className="footer">
							<ul className="project-tech-list">
								<li>React</li>
								<li>Springboot</li>
								<li>Java</li>
								<li>JPA</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/Portfolio">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
									<a href="https://johnwesly-profiolo.netlify.app/">
										<GoLinkExternal size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								Profiolo
							</a>
						</h3>
						<div className="project-description">
							<p>
								Designed a Personal website for Showcasing my work and
								achivements using React and vanilla css
							</p>
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
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/Nike-website">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
									<a href="https://nike-website-by-john.netlify.app/#">
										<GoLinkExternal className="ProjectIcon" size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								Nike Website
							</a>
						</h3>
						<div className="project-description">
							<p>
								Designed a Nike Website using Tailwind and Javascript for
								Explore the dynamic css through Tailwind CSS.
							</p>
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
				<li className="projectLi">
					<div className="projectbox">
						<div>
							<div className="projectTop">
								<div className="folder">
									<CiFolderOn className="ProjectIcon" size={30} />
								</div>
								<div className="projectLinks">
									<a href="https://github.com/johnwesly2002/React-countries">
										<LuGithub className="ProjectIcon" size={30} />
									</a>
								</div>
							</div>
						</div>
						<h3 className="project-title">
							<a target="_blank" rel="noopener noreferrer">
								Explore Countries
							</a>
						</h3>
						<div className="project-description">
							<p>
								Designed and Developed a Project to Explore the Countries and
								their neighbour Countries based on Regions and continents.
							</p>
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
		</motion.section>
	);
};

export default Projects;
