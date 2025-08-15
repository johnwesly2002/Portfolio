import React from 'react';
import { motion } from 'framer-motion';
import "./styles.css";
import "../../App.css";
import { AiOutlineFire } from "react-icons/ai";
import { GoGitMerge } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import SpotlightCard from '../constants/spotlightCard/SpotlightCard.jsx';
const Achievements = () => {
  const dsaAchievements = [
{ 
  title: "1000+ DSA Problems", 
  description: "Solved over 1000+ challenging problems across LeetCode, Codeforces, and GeeksforGeeks, strengthening problem-solving and optimization skills.", 
  icon: <AiOutlineFire size={40} />
},
{ 
  title: "LeetCode Streak", 
  description: "Maintained a 300+ day streak of daily coding practice, demonstrating consistency, discipline, and continuous learning.", 
  icon: <SiLeetcode size={40} />
},
{ 
  title: "Algorithm Mastery", 
  description: "Achieved deep expertise in core algorithms including Graph Theory, Dynamic Programming, and advanced problem-solving patterns.", 
  icon: <LuBrainCircuit size={40} /> 
},
{ 
  title: "System Design", 
  description: "Gained proficiency in Low-Level and High-Level Design principles, implementing scalable architectures through real-world projects.", 
  icon: <GoGitMerge size={40} />
}

  ];

  const renderCard = (item, index) => (
    <SpotlightCard className="achievement-card" spotlightColor="rgba(124, 46, 202, 0.47)">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
    >
      <div className="achievement-icon">{item.icon}</div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </motion.div>
    </SpotlightCard>
  );

  return (
    <section id="Achievements" className="section achievements-section">
      <h2 className="sectionheading">Achievements</h2>
      <div className="achievements-grid">
        {dsaAchievements.map(renderCard)}
      </div>
    </section>
  );
};

export default Achievements;
