import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';
import "./styles.css";
import "../../App.css";
import bgImage from "../../assets/Acheivementsbg.png"
const Counter = ({ target, label, subLabel }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 4,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, target]);

  return (
   <div className='Achcard'>
      <motion.span
        ref={ref}
        className='AchNum'
      >
        {rounded}
      </motion.span>
       <span style={{ fontSize: '3rem', fontWeight: 'bold', marginLeft: '4px' }}>+</span>
      <div className='Ach-label'>
        {label}
      </div>
      <span className='subLabel'>{subLabel}</span>
    </div>
  );
};

const Achievements = () => {
  return (
    <motion.section
      id="Achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="section"
      style={{color: 'white', textAlign: 'center' }}
    >
      <h2 className="sectionheading">Achievements</h2>

      <div className='Achcards' style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,1)',
        backdropFilter: 'blur(8px)',
      }}>
          <Counter target={700} subLabel={'problems solved on all platforms'} />
          <Counter target={400} subLabel={'problems solved on Leetcode'} />
      </div>
    </motion.section>
  );
};

export default Achievements;
