import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  return (
    <div className="navbar">
      <div className="p h1">
        <h1>YumyFood</h1>
        <p>Admin Panel</p>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
}

export default Navbar;
