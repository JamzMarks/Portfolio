import React from "react";
import Tech from './tech/tech'
import { About } from "./about/about";
import './home.scss'

const Home = () => {
    return(
        <div className="">
            <About></About>
            <Tech></Tech>
        </div>
    )
}

export default Home