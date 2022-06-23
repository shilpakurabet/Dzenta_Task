/** @format */

import React from "react";

function Navbar() {
  return (
    <div className="d-flex Navbar">
      <div>
        <img src="menu.png" alt="" className="hamburger" />
      </div>
      <div>
        <img src="add.png" alt="" className="navIcon" />
        <img src="navTag.png" alt="" className="navIcon" />
        <img src="user.png" alt="" className="navIcon" />

        <select className="dropdown">
          <option> English</option>
          <option>Kannada </option>
          <option>Hindi </option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
