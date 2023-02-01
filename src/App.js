import { useEffect, useState } from 'react';
import { BaseConcept } from "../src/components/BaseConcept";
import Content from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import Hero from "../src/components/Hero";
import MetaHead from "../src/components/MetaHead";
import NavBar from "../src/components/NavBar";
import { OurPartners } from "../src/components/OurPartners";
import Subscribe from "../src/components/Subscribe";
import { ThreeCards } from "../src/components/ThreeCards";
import AboutUs from "../src/components/AboutUs";

function App() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
   <>
    <div className="h-screen px-4 py-8 overflow-auto overflow-x-hidden text-white font-poppins md:px-20 bg-gradient-to-b from-background to-background">
        <NavBar isMobile={isMobile} />
        <Hero />
        <AboutUs />
        <Content />
        <BaseConcept />
        <ThreeCards />
        <OurPartners />
        <Subscribe />
        <Footer />
      </div>
   </>
  );
}

export default App;
