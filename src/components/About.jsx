import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      > I am a passionate software engineer with deep expertise in web development, machine learning and deep learning.
          <br /><br />
          At Siemens, I contributed to PartQuest Explore, where I helped improve simulation performance using Azure and .NET. At Bosch, I developed fault diagnostic software for embedded automotive systems. As a fellow at PathVu, I helped build a LiDAR-based accessibility tool to capture and analyze curb ramp data.
          <br /><br />
          With over 2.5 years of professional experience, supported by a Master’s in Information Science from the University of Pittsburgh, I deliver reliable, scalable solutions and actionable insights through innovative projects.
          
      </motion.p>


    </>
  );
};

export default SectionWrapper(About, "about");
