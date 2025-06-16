import { motion } from "motion/react";
import { defaultProps, heroAnimate, heroBtnAnimate } from "../constants";
function HeroSection() {
  return (
    <section id="#" className="mt-8 lg:mt-16  ">
      <motion.div
        {...defaultProps}
        className=" lg:flex lg:justify-between items-center lg:flex-row-reverse gpad flex flex-col gap-10 "
      >
        <motion.div
          variants={heroAnimate}
          className=" lg:min-w-[50%] flex justify-end md:justify-center lg:justify-end -mr-40 sm:mr-0 lg:-mr-80  "
        >
          <img src="illustration-working.svg" alt="hero" className=" w-fit  " />
        </motion.div>
        <motion.div
        {...defaultProps}
          
          className=" flex flex-col gap-4 lg:w-1/2"
        >
          <motion.div variants={heroAnimate}>
            <h1 className="font-shortly font-bold text-black text-center lg:text-left text-[40px] leading-tight lg:text-6xl ">
              More than just shorter links
            </h1>
          </motion.div>
          <motion.div variants={heroAnimate}>
            <p className="font-shortly font-normal text-text-accent text-center lg:text-left text-lg lg:text-2xl">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </motion.div>
          <motion.div variants={heroBtnAnimate} className="flex justify-center items-center lg:justify-start mt-4 perspective-origin-top ">
            <button  className="cta-btn ">Get Started</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
