/** @format */

import React from "react";

function OrderStatuscard({ orderStatus, howMany, src, style }) {
  return (
    <div className="OrderStatuscard me-4 col-lg-3 col-md-6 col-sm-12">
      <div>
        <div className="mb-3 statusText"> {orderStatus} </div>
        <div className="statusNum"> {howMany} </div>
      </div>
      <div className="orderStatusIcon" style={style}>
        <img src={src} alt="" className="orderIcon" />
      </div>
    </div>
  );
}

export default OrderStatuscard;
