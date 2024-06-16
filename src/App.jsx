import CoverArea from "./components/CoverArea";
import CreateYourStore from "./components/CreateYourStore";
import Footer from "./components/Footer";
import JoinYourFellowCreator from "./components/JoinYourFellowCreator";
import MarketYourProducts from "./components/MarketYourProducts";
import OneSimplePlatform from "./components/OneSimplePlatform";
import SellYourProducts from "./components/SellYourProducts";

function App() {
  return (
    <div className="mx-1 md:mx-0">
      <CoverArea />
      <CreateYourStore />
      <SellYourProducts />
      <MarketYourProducts />
      <OneSimplePlatform />
      <JoinYourFellowCreator />
      <Footer />
    </div>
  );
}

export default App;
