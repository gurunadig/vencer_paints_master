import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import PartnersPage from './pages/PartnersPage';
import ExteriorPage from './pages/ExteriorPage';
import PrimerPage from './pages/PrimerPage';
import InteriorPage from './pages/InteriorPage';
import OilBasedPage from './pages/OilBased';
import ComingSoonPage from './pages/ComingSoonPage';
import WaterEnamles from './pages/WaterEnamle';
import Putty from './pages/Putty';
import MachineColurant from './pages/MachineColurant';
import UniversalStainers from './pages/UniversalStainers';
import Inspirator from './pages/Inspirator';


import RoyalHeritagePage from './pages/interior/RoyalHeritage';
import EasyWash from './pages/interior/EasyWash';
import Wonder from './pages/interior/Wonder';
import WonderShine from './pages/interior/WonderShine';

import PremiumEnamels from './pages/oilbased/PremiumEnamels';
import MasterCoat from './pages/oilbased/MasterCoat';
import OilAllRound from './pages/oilbased/OilAllRound';


import Primex from './pages/primer/Primex';
import MasterStrokePage from './pages/primer/MasterStrokePage';
import AllRoundPage from './pages/primer/AllRound';

import SuperShield from './pages/exterior/SuperShield';
import Armour from './pages/exterior/Armour';
import WeatherGuard from './pages/exterior/WeatherGuard';
import WeatherGuardAdvanced from './pages/exterior/WeatherGuardAdvanced';

import Venacrylsb2101 from './pages/industrial/venacrylSb2101';
import Venacrylsbhg from './pages/industrial/venacrylSbhg';
import Pab2404 from './pages/industrial/pab2404';
import Pabhg410 from './pages/industrial/pabhg410';
import Sbv700 from './pages/industrial/sbv700';
import Ahtp28 from './pages/industrial/ahtp28';
import Dap28 from './pages/industrial/dap28';


import StrongHold from './pages/adhesive/stronghold';
import JumboProof from './pages/adhesive/jumboproof';
import JumboCrete from './pages/adhesive/jumbocrete';
import Vaari from './pages/adhesive/vaari';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/about' element={<AboutPage />}></Route>
          <Route exact path='/contact' element={<ContactPage />}></Route>
          <Route exact path='/product' element={<ProductPage />}></Route>
          <Route exact path='/blog' element={<BlogPage />}></Route>
          <Route exact path='/blog_details' element={<BlogDetails />}></Route>
          <Route exact path='/partners' element={<PartnersPage/>}></Route>

          <Route exact path='/comingsoon' element={<ComingSoonPage/>}></Route>

          <Route exact path='/exteriorpaints' element={<ExteriorPage/>}></Route>
          <Route exact path='/interiorpaints' element={<InteriorPage/>}></Route>
          <Route exact path='/oilbasedpaints' element={<OilBasedPage/>}></Route>
          <Route exact path='/primerpaints' element={<PrimerPage/>}></Route>
          <Route exact path='/WaterEnamles' element={<WaterEnamles/>}></Route>
          <Route exact path='/Putty' element={<Putty/>}></Route>
          <Route exact path='/MachineColurant' element={<MachineColurant/>}></Route>
          <Route exact path='/UniversalStainers' element={<UniversalStainers/>}></Route>
          <Route exact path='/Inspirator' element={<Inspirator/>}></Route>


          <Route exact path='/masterstroke' element={<MasterStrokePage />}></Route>

          <Route exact path='/royalheritage' element={<RoyalHeritagePage />}></Route>
          <Route exact path='/allround' element={<AllRoundPage />}></Route>
          <Route exact path='/easywash' element={<EasyWash />}></Route>
          <Route exact path='/wonder' element={<Wonder />}></Route>
          <Route exact path='/wondershine' element={<WonderShine />}></Route>


          <Route exact path='/premiumenamels' element={<PremiumEnamels />}></Route>
          <Route exact path='/mastercoat' element={<MasterCoat />}></Route>
          <Route exact path='/oilallround' element={<OilAllRound />}></Route>

          <Route exact path='/primex' element={<Primex />}></Route>


          <Route exact path='/supershield' element={<SuperShield />}></Route>
          <Route exact path='/armour' element={<Armour />}></Route>
          <Route exact path='/weatherguard' element={<WeatherGuard />}></Route>
          <Route exact path='/weatherguardadvanced' element={<WeatherGuardAdvanced />}></Route>

          <Route exact path='/Venacrylsb2101' element={<Venacrylsb2101 />}></Route>
          <Route exact path='/Venacrylsbhg' element={<Venacrylsbhg />}></Route>
          <Route exact path='/Pab2404' element={<Pab2404 />}></Route>
          <Route exact path='/Pabhg410' element={<Pabhg410 />}></Route>
          <Route exact path='/Sbv700' element={<Sbv700 />}></Route>
          <Route exact path='/Ahtp28' element={<Ahtp28 />}></Route>
          <Route exact path='/Dap28' element={<Dap28 />}></Route>



          <Route exact path='/StrongHold' element={<StrongHold />}></Route>
          <Route exact path='/Vaari' element={<Vaari />}></Route>
          <Route exact path='/JumboProof' element={<JumboProof />}></Route>
          <Route exact path='/JumboCrete' element={<JumboCrete />}></Route>



        </Routes>
      </Router>

    </div>
  );
}

export default App;
