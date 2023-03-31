import AboutSection from "../modules/StaticSections/AboutSection/AboutSection";
import HeroSection from "../modules/StaticSections/HeroSection/HeroSection";
import OffersSection from "../modules/StaticSections/OffersSection/OffersSection";

const HomePage = function () {
  return (
    <main>
      <HeroSection />
      <OffersSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;
