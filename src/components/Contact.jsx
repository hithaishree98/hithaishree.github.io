import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "../assets/";

import { styles } from "../styles";
import { PaperPlaneCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-6">
          <a
            href="mailto:hithaishreeshankar98@gmail.com"
            className="flex items-center bg-tertiary py-4 px-6 rounded-lg hover:bg-tertiary/80 transition-colors"
          >
            <img
              src={FaEnvelope}
              alt="Email"
              className="w-6 h-6 mr-4"
            />
            <span className="text-white font-medium">Email Me</span>
          </a>

          <a
            href="https://github.com/hithaishree98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-tertiary py-4 px-6 rounded-lg hover:bg-tertiary/80 transition-colors"
          >
            <img
              src={FaGithub}
              alt="GitHub"
              className="w-6 h-6 mr-4"
            />
            <span className="text-white font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hithaishree-shankar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-tertiary py-4 px-6 rounded-lg hover:bg-tertiary/80 transition-colors"
          >
            <img
              src={FaLinkedin}
              alt="LinkedIn"
              className="w-6 h-6 mr-4"
            />
            <span className="text-white font-medium">LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <PaperPlaneCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");