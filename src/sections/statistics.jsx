import {
  cardAnimate,
  cardParentVariants,
  lineAnimateHor,
  lineAnimateVer,
  statVars,
  vpVars,
} from "../constants";
import useResized from "../hooks/resize-hook";
import Card from "../MyComponents/card";
import { motion } from "motion/react";

function Statistics() {
  const isDesktop = useResized();
  return (
    <section id="features" className="bg-main-bg gpad py-12">
      <div className="w-full p-2 flex justify-center mb-8">
        <div className="max-w-xl">
          <h2 className="text-black text-3xl md:text-[40px] font-bold font-shortly text-center mb-8">
            Advanced Statistics
          </h2>
          <p className="text-text-accent text-[17px] font-normal font-shortly text-center ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:justify-center relative overflow-hidden pt-8 gap-18 lg:gap-6 isolate lg:flex-row  ">
        <motion.div
          {...vpVars}
          variants={isDesktop ? lineAnimateHor : lineAnimateVer}
          className="h-full w-[6px] bg-prime-light absolute left1/2  -z-10 lg:h-[6px] lg:w-full lg:left-0 lg:top-1/2 lg:translate-y-6"
        ></motion.div>
        <motion.div {...cardParentVariants} className="flex flex-col items-center lg:justify-center relative overflow-hidden pt-8 gap-18 lg:gap-6 isolate lg:flex-row" >
          {statVars.map((item, index) => (
            <motion.div key={item.title} variants={cardAnimate} >
              <Card key={item.title} item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Statistics;
