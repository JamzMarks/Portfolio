import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/home";
import Projects from "./components/pages/projects/projects";
import Contact from "./components/pages/contact/contact";
import Footer from "./components/footer/footer";
import Infos from "./components/infos/infos";
const AppRoutes = () => {
  return (
    <Router>
        <Infos></Infos>
        <main className="content-main">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path=" /projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            <Footer></Footer>
        </main>
    </Router>
  );
};
export default AppRoutes;
