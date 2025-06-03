import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";


const Hero = () => {
  const name = "Hithaishree.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + name.charAt(index));
        setIndex(prev => prev + 1);
      }, 140);

      return () => clearTimeout(timeoutId);
    }
  }, [index,name]);

  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[260px] max-w-5xl mx-auto ${styles.paddingX} flex justify-center items-start`}
      >

        <div className="flex flex-col items-center text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#8329e3]">
              {displayedText}
              <span className="inline-block w-[4px] h-10 bg-[#8329e3] ml-1 animate-blink"></span>
            </span>
          </h1> 

          {/* <h2 className="text-white text-[20px] sm:text-[24px] font-medium mt-2">
            Software Engineer 
          </h2> */}

          <p className="mt-4 text-white-250 text-[24px] sm:text-[16px] leading-relaxed max-w-3xl">
            I am a software engineer based in the USA, passionate about exploring how things work.<br/>
            I’m fascinated by large-scale, high-impact products, and I strive to turn this curiosity into real-world systems that are efficient and resilient.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="flex flex-col items-center animate-bounce text-white text-sm">
          <svg
            className="w-5 h-5 mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
