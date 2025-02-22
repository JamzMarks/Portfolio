import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portfolio from "../components/pages/portfolio/portfolio";
import Home from "../components/pages/home/home";
import Contact from "../components/pages/contact/contact";
import Footer from "../components/footer/footer";
import Infos from "../components/infos/infos";
const AppRoutes = () => {
  return (
    <Router>
        <Infos></Infos>
        <div className="content-main">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            <Footer></Footer>
        </div>
    </Router>
  );
};
export default AppRoutes;
