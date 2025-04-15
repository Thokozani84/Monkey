import "./header.css";
import {useContext} from "react";
import Navbar from "../navbar/navbar";
const Header =()=>{
  return(
    <div className="header">
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="header-content">
        <h1>High-quality content? We’ve got you covered!</h1>
        <div className="header-content-2">
           <h3>Imahalalento</h3>
        </div>
      </div>
    </div>
    )
};

export default Header




