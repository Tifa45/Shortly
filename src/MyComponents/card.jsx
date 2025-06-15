import { motion } from "motion/react";
import { deafaultProps, popupAnimate } from "../constants";
import useResized from "../hooks/resize-hook";
function Card({ item, index }) {
  const isDesktop = useResized();
  let pos = index * 60;
  let stagger = index + 1;
  console.log(pos);
  return (
    <div
      className={`bg-white rounded-sm flex flex-col items-center justify-center w-full   px-6 pb-10 pt-14 lg:pt-12 lg:px-5 relative lg:h-[250px] lg:mt-[var(--mt)] `}
      style={{ "--mt": `${pos}px` }}
    >
      <motion.div
        {...deafaultProps}
        custom={stagger}
        variants={isDesktop && popupAnimate}
        className="w-[64px] h-[64px] rounded-full bg-prime-dark flex justify-center items-center p-4 absolute left-1/2 lg:left-[20%] -translate-x-1/2 top-0 -translate-y-1/2"
      >
        <img src={item.img} alt="icon" className="w-fit" />
      </motion.div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="card-title w-full">{item.title}</h2>
        <p className="card-text">{item.descrioption}</p>
      </div>
    </div>
  );
}

export default Card;
