import react from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Portfolio from '../components/pages/portfolio/portfolio'
import Home from '../components/pages/home/home'
import Contact from '../components/pages/contact/contact'

const AppRoutes = () => {
    return (
        <Router>
                <div className="content-main">
                    <Routes>
                        <Route  path="/" exact element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route  path="*" element={<Home/>}/>
                    </Routes>
                </div>     
        </Router>
    )
}
export default AppRoutes