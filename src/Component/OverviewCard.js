/** @format */

import React from "react";

function OverviewCard() {
  return (
    <div className="row overviewCard">
      <div className="title"> Overview</div>
      <div className="overviewImg  mt-3">
        <div>
          <img src="pie-chart.png" alt="" className="overviewCardImg" />{" "}
        </div>
      </div>
      <div className="overviewList">
        <div className="overviewListUl1">
          <ul>
            <li className="mb-3"> pending </li>
            <li>Ready To Deliver </li>
          </ul>
        </div>
        <div className="overviewListUl2">
          <ul>
            <li className="mb-3"> Processing </li>
            <li>Delivered </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
