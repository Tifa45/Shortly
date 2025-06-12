import MobNavbar from "./MyComponents/mob-navbar";
import Boost from "./sections/boost";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero-section";
import ShortenLink from "./sections/shorten-link";
import Statistics from "./sections/statistics";

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden pt-8">
        <MobNavbar />
        <HeroSection />
        <ShortenLink />
        <Statistics />
        <Boost />
        <Footer/>
      </div>
    </>
  );
}

export default App;
