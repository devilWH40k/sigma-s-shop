import ProductSection from "../modules/Sections/DynamicSections/ProductSection/ProductSection";
import AboutSection from "../modules/Sections/StaticSections/AboutSection/AboutSection";
import HeroSection from "../modules/Sections/StaticSections/HeroSection/HeroSection";
import OffersSection from "../modules/Sections/StaticSections/OffersSection/OffersSection";

const HomePage = function () {
  return (
    <main>
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <ProductSection />
    </main>
  );
};

export default HomePage;
