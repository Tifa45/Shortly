function Boost() {
  return (
    <section className="w-full">
      <div className="bg-prime-dark isolate relative">
        <img
          src="bg-boost-mobile.svg"
          alt="bg-boost"
          className=" block md:hidden w-full -z-10"
        />
        <img
          src="bg-boost-desktop.svg"
          alt="bg-boost"
          className=" md:block hidden w-full -z-10"
        />
        <div className=" w-full flex flex-col justify-center items-center p-4 gap-2 lg:gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <h2 className="boost-title">Boost your links today</h2>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Boost;
