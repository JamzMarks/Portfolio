import react from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Portfolio from '../components/pages/portfolio/portfolio'
import Home from '../components/pages/home/home'
import Contact from '../components/pages/contact/contact'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const AppRoutes = () => {
    return (
        
        <Router>
            <Header></Header>
                <div className="content-main">
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                </div>  
            <Footer></Footer>   
        </Router>
    )
}
export default AppRoutes