/** @format */

import React from "react";
import Icon from "./Icon";

function Menus({ src, menuName }) {
  return (
    <div className="lists">
      <li className="listItems">
        <div>
          <Icon src={src} />
        </div>
        <div> {menuName}</div>
      </li>
    </div>
  );
}

export default Menus;
