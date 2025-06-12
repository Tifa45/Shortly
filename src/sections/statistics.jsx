import { Item } from "@radix-ui/react-menubar";
import { statVars } from "../constants";
import Card from "../MyComponents/card";

function Statistics() {
  return (
    <section className="bg-main-bg gpad py-12">
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
        <div className="h-full w-[6px] bg-prime-light absolute left1/2  -z-10 lg:h-[6px] lg:w-full lg:left-0 lg:top-1/2 lg:translate-y-6"></div>

        {statVars.map((item,index) => (
          <Card key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Statistics;
