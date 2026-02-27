import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT COMPONENTS ---
import Nav from './component/Nav'; 
import Footer from "./component/Footer";
import WhatsAppFloating from "./component/WhatsAppFloating";
import AboutUs from "./component/aboutus";
import SolutionsSection from "./component/Solutions";
import Products from "./component/Products";
import IndustriesWeServe from "./component/IndustriesWeServe";
import Blog from "./component/blog";
import TalkToExpert from "./component/TalkToExpert";
import Homepage from "./component/pages/Homepage"; 
import Aroms from "./component/AromaOils";
import SprayCollectionPage from "./component/Spray/spraypage";

// --- SOLUTION PAGE IMPORTS ---
import ScentMarketingPage from "./component/Solutionpage/ScentMarketingSolutions";
import Washroom from "./component/Solutionpage/WashroomHygieneSolutions";
import Carpersonal from "./component/Solutionpage/Car&PersonalSpaceScentingSolutions";
import Commercial from "./component/Solutionpage/CommercialAromaDiffusionSolutions";
import Hvac from "./component/Solutionpage/HVACScentingSolutions";
import Maintenance from "./component/Solutionpage/Maintenance&RefillSupportServices";

// --- PRODUCT CATEGORY IMPORTS ---
import CarAaromaD from "./component/productpage/CarAromaDiffusers";
import CommercialD from "./component/productpage/commercialDiffusers";
import Desktopsmall from "./component/productpage/Desktop&SmallSpaceAromaDiffusers";
import Floorstanding from "./component/productpage/Floor-StandingAromaDiffusers";
import Largearea from "./component/productpage/LargeareaDiffusers";
import Passivenopower from "./component/productpage/Passive-No-PowerDiffusers";
import WallmountedD from "./component/productpage/Wall-Mounted&CeilingAromaDiffusers";
import Scrollup from "./component/scrolluparrow";

// --- AROMA CATEGORY IMPORTS ---
import OrientalFragrances from "./component/Aromaoilspage/Oriental Fragrances";
import FreshFragrances from "./component/Aromaoilspage/Fresh Fragrances";
import PerfumersChoice from "./component/Aromaoilspage/Perfumers Choice";
import FruityFragrances from "./component/Aromaoilspage/Fruity Fragrances";
import FoodBeverageFragrances from "./component/Aromaoilspage/Food & Beverage Fragrances";
import PremiumCollection from "./component/Aromaoilspage/Premium Collection";

// --- AROMA DETAILED PAGE IMPORTS ---
import AddressAromaOilDetail from "./component/Aromaoilspage/detailedpage/AddressAromaOil";
import ArabianBakhourAromaOil from "./component/Aromaoilspage/detailedpage/ArabianBakhourAromaOil";
import ArabianPeninsulaAromaOil from "./component/Aromaoilspage/detailedpage/ArabianPeninsulaAromaOil";
import BrownOrchidAromaOil from "./component/Aromaoilspage/detailedpage/BrownOrchidAromaOil";
import ClassicAromaOil from "./component/Aromaoilspage/detailedpage/ClassicAromaOil";
import CrystalAromaOil from "./component/Aromaoilspage/detailedpage/CrystalAromaOil";
import EmaarAromaOil from "./component/Aromaoilspage/detailedpage/EmaarAromaOil";
import EnglishLavenderAromaOil from "./component/Aromaoilspage/detailedpage/EnglishLavenderAromaOil";
import EventAromaOil from "./component/Aromaoilspage/detailedpage/EventAromaOil";
import FloralAromaOil from "./component/Aromaoilspage/detailedpage/FloralAromaOil";
import ForYouAromaOil from "./component/Aromaoilspage/detailedpage/ForYouAromaOil";
import GoldAromaOil from "./component/Aromaoilspage/detailedpage/GoldAromaOil";
import HarmonyAromaOil from "./component/Aromaoilspage/detailedpage/HarmonyAromaOil";
import LavenderAromaOil from "./component/Aromaoilspage/detailedpage/LavenderAromaOil";
import LotusFlowerAromaOil from "./component/Aromaoilspage/detailedpage/LotusFlowerAromaOil";
import PassionAromaOil from "./component/Aromaoilspage/detailedpage/PassionAromaOil";
import ScentsNaturalAromaOil from "./component/Aromaoilspage/detailedpage/ScentsNaturalAromaOil";
import SplendorAromaOil from "./component/Aromaoilspage/detailedpage/SplendorAromaOil";
import StoryAromaOil from "./component/Aromaoilspage/detailedpage/StoryAromaOil";
import TajSunsetAromaOil from "./component/Aromaoilspage/detailedpage/TajSunsetAromaOil";
import TrueCoffeeAromaOil from "./component/Aromaoilspage/detailedpage/TrueCoffeeAromaOil";
import TuscanLeatherAromaOil from "./component/Aromaoilspage/detailedpage/TuscanLeatherAromaOil";
import WhiteTeaAromaOil from "./component/Aromaoilspage/detailedpage/WhiteTeaAromaOil";
import SweetOudAromaOilDetail from "./component/Aromaoilspage/detailedpage/SweetOudAromaOil";

// --- AEROSOL SPRAY DETAILED PAGE IMPORTS ---
import FloraSpray from "./component/Spray/Flora";
import ForYouSpray from "./component/Spray/ForYouAerosolSpray";
import SenseSpray from "./component/Spray/SenseAerosolSpray";
import EventSpray from "./component/Spray/EventAerosolSpray";
import VanillaSpray from "./component/Spray/VarillaIceCreamAerosolSpray";
import PassionSpray from "./component/Spray/PassionAerosolSpray";
import ParisSpray from "./component/Spray/ParisAerosolSpray";
import FreshBakhoorSpray from "./component/Spray/FreshBakhoorAerosolSpray";
import FreshJasmineSpray from "./component/Spray/FreshJasmineAerosolSpray";
import ClassicSpray from "./component/Spray/ClassicAerosolSpray";
import StrawberrySpray from "./component/Spray/StrawberryAerosolSpray";
import RoseSpray from "./component/Spray/RoseAerosolSpray";
import TraditionSpray from "./component/Spray/TraditionAerosolSpray";
import FreshLavenderSpray from "./component/Spray/FreshLavenderAerosolSpray";
import AuraSpray from "./component/Spray/AuraAerosolSpray";
import ProfumoSpray from "./component/Spray/ProfumoAerosolSpray";
import FantasticSpray from "./component/Spray/FantasticAerosolSpray";
import FloralSpray from "./component/Spray/FloralAerosolSpray";
import VoyageSpray from "./component/Spray/VoyageAerosolSpray";

// --- SEPARATE INDIVIDUAL PRODUCT IMPORTS ---
import AeroBlackMed from "./component/separateproducts/AeroBlack Med Diffuser";
import DriveMist from "./component/separateproducts/DriveScent Diffuser";
import NovaCar from "./component/separateproducts/NovaCar Diffuser";
import AeroBlackpro from "./component/separateproducts/AeroBlack Pro Diffuser"; 
import VentoCar from "./component/separateproducts/VentoCar Diffuser";
import OpalMist from "./component/separateproducts/OpalMist Clock Diffuser";
import DeskMist from "./component/separateproducts/AromaDesk Diffuser";
import ZenBoxMini from "./component/separateproducts/ZenBox Mini Diffuser";
import Titan from "./component/separateproducts/Titan Diffuser";
import LuxePanel from "./component/separateproducts/LuxePanel Diffuser";
import CeilAir from "./component/separateproducts/CeilAir Pro Diffuser";
import MistBox from "./component/separateproducts/MistBox X Diffuser";
import AirPulse from "./component/separateproducts/AirPulse 150 Diffuser";
import AeroPillar from "./component/separateproducts/AeroPillar Diffuser";
import AirPole from "./component/separateproducts/AirPole Pro Diffuser";
import NanoPillar from "./component/separateproducts/NanoPillar Diffuser";
import NaturalFlow from "./component/separateproducts/Natural Fragrance Diffuser";
import Solution from "./component/Solutionpage/Solution";
import AeroCubePage from "./component/separateproducts/AeroCube Diffuser";
import Aeromaxpro from "./component/separateproducts/AeroMax Pro";
import DeskScentPage from "./component/separateproducts/DeskScent";
import AerosolDispensersPage from "./component/productpage/Aerosol Dispensers";
import ThankYouPage from "./component/Thankyoupage";

import Blog1 from "../src/component/blogs/blog1";
import Blog2 from "../src/component/blogs/blog2";
import Blog3 from "../src/component/blogs/blog3";

// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProductPage = () => (
  <>
    <Products />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Nav />
      <WhatsAppFloating />
      <Scrollup />

      <Routes>
        {/* --- MAIN PAGES --- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/solutions/" element={<SolutionsSection />} />
        <Route path="/products/" element={<ProductPage />} />
        <Route path="/aromas/" element={<Aroms />} />
        <Route path="/industries/" element={<IndustriesWeServe />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/contact/" element={<TalkToExpert />} />
        <Route path="/solution/" element={<Solution />} />
        <Route path="/spray/" element={<SprayCollectionPage />} />
        <Route path="/thank-you/" element={<ThankYouPage />} />

        {/* --- SOLUTION ROUTES --- */}
        <Route path="/scent-marketing-solutions/" element={<ScentMarketingPage />} />
        <Route path="/commercial-aroma-diffusion-solutions/" element={<Commercial />} />
        <Route path="/hvac-scenting-solutions/" element={<Hvac />} />
        <Route path="/washroom-hygiene-solutions/" element={<Washroom />} />
        <Route path="/car-and-personal-space-scenting-solutions/" element={<Carpersonal />} />
        <Route path="/maintenance-and-refill-support-services/" element={<Maintenance/>} />

       {/* --- PRODUCT CATEGORY ROUTES (Plural Version) --- */}
<Route path="/car-aroma-diffusers/" element={<CarAaromaD />} />
<Route path="/commercial-aroma-diffusers/" element={<CommercialD />} />
<Route path="/desktop-and-small-space-aroma-diffusers/" element={<Desktopsmall />} />
<Route path="/floor-standing-aroma-diffusers/" element={<Floorstanding />} />
<Route path="/large-area-and-hvac-aroma-diffusers/" element={<Largearea />} />
<Route path="/no-power-diffusers/" element={<Passivenopower />} />
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/" element={<WallmountedD />} />
<Route path="/aerosol-dispensers/" element={<AerosolDispensersPage />} />

        {/* --- AROMA CATEGORY ROUTES --- */}
        <Route path="/oriental-aroma-oil/" element={<OrientalFragrances />} />
        <Route path="/fresh-aroma-oil/" element={<FreshFragrances />} />
        <Route path="/perfumers-choice-aroma-oil/" element={<PerfumersChoice />} />
        <Route path="/fruity-aroma-oil/" element={<FruityFragrances />} />
        <Route path="/food-and-beverage-aroma-oil/" element={<FoodBeverageFragrances />} />
        <Route path="/premium-aroma-oil/" element={<PremiumCollection />} />
        
      {/* Commercial Aroma Diffusers */}
<Route path="/commercial-aroma-diffusers/aeroblack-med-diffuser/" element={<AeroBlackMed />} />
<Route path="/commercial-aroma-diffusers/mistbox-x-diffuser/" element={<MistBox />} />
<Route path="/commercial-aroma-diffusers/aeroblack-pro/" element={<AeroBlackpro />} />

{/* Large Area & HVAC */}
<Route path="/large-area-and-hvac-aroma-diffusers/aeroblack-pro-diffuser/" element={<AeroBlackpro />} />
<Route path="/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/" element={<AirPulse />} />

{/* Car Aroma Diffusers */}
<Route path="/car-aroma-diffusers/vento-car-diffuser/" element={<VentoCar />} />
<Route path="/car-aroma-diffusers/drive-scent-diffuser/" element={<DriveMist />} />
<Route path="/car-aroma-diffusers/desk-scent-diffuser/" element={<DeskScentPage />} />
<Route path="/car-aroma-diffusers/nova-car-diffuser/" element={<NovaCar />} />

{/* Desktop & Small Space */}
<Route path="/desktop-and-small-space-aroma-diffusers/aero-cube-diffuser/" element={<AeroCubePage />} />
<Route path="/desktop-and-small-space-aroma-diffusers/zembox-mini-diffuser/" element={<ZenBoxMini />} />
<Route path="/desktop-and-small-space-aroma-diffusers/aroma-desk-diffuser/" element={<DeskMist />} />
<Route path="/desktop-and-small-space-aroma-diffusers/luxepanel-diffuser/" element={<LuxePanel />} />
<Route path="/desktop-and-small-space-aroma-diffusers/opalmist-clock-diffuser/" element={<OpalMist />} />

{/* Wall-Mounted & Ceiling */}
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/ceil-air-pro-diffuser/" element={<CeilAir />} />
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/aeromax-pro-diffuser/" element={<Aeromaxpro />} />
{/* These two were requested in the sitemap for wall-mounted category */}
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/aerocube-diffuser/" element={<AeroCubePage />} />
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/zenbox-mini-diffuser/" element={<ZenBoxMini />} />
<Route path="/wall-mounted-and-ceiling-aroma-diffusers/luxepanel-diffuser/" element={<LuxePanel />} />

{/* Floor Standing */}
<Route path="/floor-standing-aroma-diffusers/nano-pillar-diffuser/" element={<NanoPillar />} />
<Route path="/floor-standing-aroma-diffusers/titan-diffuser/" element={<Titan />} />
<Route path="/floor-standing-aroma-diffusers/aeropillar-diffuser/" element={<AeroPillar />} />
<Route path="/floor-standing-aroma-diffusers/airpole-pro-diffuser/" element={<AirPole />} />

{/* No Power */}
<Route path="/no-power-diffusers/natural-fragrance-diffuser/" element={<NaturalFlow />} />

        {/* --- AROMA DETAILED PAGES ROUTES --- */}
        <Route path="/oriental-aroma-oil/address/" element={<AddressAromaOilDetail />} />
        <Route path="/oriental-aroma-oil/arabian-peninsula/" element={<ArabianPeninsulaAromaOil />} />
        <Route path="/oriental-aroma-oil/arabian-bakhour/" element={<ArabianBakhourAromaOil />} />
        <Route path="/oriental-aroma-oil/emaar/" element={<EmaarAromaOil />} />
        <Route path="/oriental-aroma-oil/sweet-oud/" element={<SweetOudAromaOilDetail/>} />
        <Route path="/fresh-aroma-oil/lavender/" element={<LavenderAromaOil />} />
        <Route path="/fresh-aroma-oil/english-lavender/" element={<EnglishLavenderAromaOil />} />
        <Route path="/fresh-aroma-oil/white-tea/" element={<WhiteTeaAromaOil />} />
        <Route path="/fresh-aroma-oil/floral/" element={<FloralAromaOil />} />
        <Route path="/fresh-aroma-oil/lotus-flower/" element={<LotusFlowerAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/harmony/" element={<HarmonyAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/event/" element={<EventAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/for-you/" element={<ForYouAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/passion/" element={<PassionAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/gold/" element={<GoldAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/tuscan-leather/" element={<TuscanLeatherAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/story/" element={<StoryAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/brown-orchid/" element={<BrownOrchidAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/scents-natural/" element={<ScentsNaturalAromaOil />} />
        <Route path="/perfumers-choice-aroma-oil/splendor/" element={<SplendorAromaOil />} />
        <Route path="/fruity-aroma-oil/crystal/" element={<CrystalAromaOil />} />
        <Route path="/food-and-beverage-aroma-oil/true-coffee/" element={<TrueCoffeeAromaOil />} />
        <Route path="/premium-aroma-oil/taj-sunset/" element={<TajSunsetAromaOil />} />
        <Route path="/premium-aroma-oil/classic/" element={<ClassicAromaOil />} />

     {/* --- AEROSOL SPRAY COLLECTION ROUTES --- */}
<Route path="/spray/flora-aerosol-spray/" element={<FloraSpray />} />
<Route path="/spray/for-you-aerosol-spray/" element={<ForYouSpray />} />
<Route path="/spray/sense-aerosol-spray/" element={<SenseSpray />} />
<Route path="/spray/event-aerosol-spray/" element={<EventSpray />} />
<Route path="/spray/varilla-ice-cream-aerosol-spray/" element={<VanillaSpray />} />
<Route path="/spray/passion-aerosol-spray/" element={<PassionSpray />} />
<Route path="/spray/paris-aerosol-spray/" element={<ParisSpray />} />
<Route path="/spray/fresh-bakhoor-aerosol-spray/" element={<FreshBakhoorSpray />} />
<Route path="/spray/fresh-jasmine-aerosol-spray/" element={<FreshJasmineSpray />} />
<Route path="/spray/classic-aerosol-spray/" element={<ClassicSpray />} />
<Route path="/spray/strawberry-aerosol-spray/" element={<StrawberrySpray />} />
<Route path="/spray/rose-aerosol-spray/" element={<RoseSpray />} />
<Route path="/spray/tradition-aerosol-spray/" element={<TraditionSpray />} />
<Route path="/spray/fresh-lavender-aerosol-spray/" element={<FreshLavenderSpray />} />
<Route path="/spray/aura-aerosol-spray/" element={<AuraSpray />} />
<Route path="/spray/profumo-aerosol-spray/" element={<ProfumoSpray />} />
<Route path="/spray/fantastic-aerosol-spray/" element={<FantasticSpray />} />
<Route path="/spray/floral-aerosol-spray/" element={<FloralSpray />} />
<Route path="/spray/voyage-aerosol-spray/" element={<VoyageSpray />} />

        <Route path="/blog/scent-marketing-hotels-uae/" element={<Blog1 />} />
        <Route path="/blog/choose-commercial-aroma-diffuser-uae/" element={<Blog2 />} />
        <Route path="/blog/scent-marketing-101-uae/" element={<Blog3 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;