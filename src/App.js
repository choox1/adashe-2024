import "./App.css";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import BuyToken from "./components/BuyToken";
import AuditsKyc from "./components/AuditsKyc";



function App() {

  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Layout  />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/buy-token" element={ <BuyToken/>} />
        <Route path="/audits-kyc" element={ <AuditsKyc/>} />        
       
      </Routes>
  
    </div>
  );
}

export default App;
