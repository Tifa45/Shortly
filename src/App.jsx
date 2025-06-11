import MobNavbar from "./MyComponents/mob-navbar";
import HeroSection from "./sections/hero-section";
import ShortenLink from "./sections/shorten-link";

function App() {
  return (
    <>
      <div className="w-full  overflow-x-hidden py-8">
        <MobNavbar />
        <HeroSection />
        <ShortenLink />
      </div>
    </>
  );
}

export default App;
