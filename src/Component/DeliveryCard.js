/** @format */

import React from "react";

function DeliveryCard({ text1, text2, src, style1, className, src1, style2 }) {
  return (
    <div style={style1}>
      <div className="DeliveryCard">
        <div className="dCardTitle mb-2">
          <div> {text1} </div>
          <div> {text2} </div>
        </div>
        <div className="demo">
          <div className="dCardIcon me-2">
            <div>
              <img src={src} alt="" className="dCardImg" />
            </div>
          </div>
          <div className={className}>
            <div style={style2}>
              <img
                src={src1}
                alt=""
                className="dCardImg"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryCard;
