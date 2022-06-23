/** @format */

import React from "react";
import DeliveryCard from "./DeliveryCard";

function DeliveryStatus() {
  return (
    <div className="DeliveryStatus col-lg-8">
      <div className="row head mb-4">
        <div className=" col-lg-4 title"> Today's delivery </div>
        <div className="col-lg-5">
          <input
            type={"text"}
            className="form-control"
            placeholder="Search Here"
          />
        </div>
        <div className="col-lg-3">
          <select className="form-select">
            <option> All Orders</option>
            <option> hhh</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-4 col-md-2 col-12">
          <DeliveryCard
            text1={"98635343"}
            text2={"ORD-0948"}
            src="shirt.png"
            style1={{
              borderRadius: "12px",
              boxShadow: "-4px 0px 0px 0px  orange",
              border: "0.2px solid orange",
            }}
            style2={{ display: "none" }}
          />
        </div>
        <div className="col-lg-4">
          <DeliveryCard
            text1={"98635343"}
            text2={"ORD-0949"}
            src="shirt.png"
            src1={"shirt.png"}
            className={"dCardIcon1"}
            style1={{
              borderRadius: "12px",
              boxShadow: "-4px 0px 0px 0px  #c9184a",
              border: "0.2px solid #c9184a",
            }}
          />
        </div>
        <div className="col-lg-4">
          <DeliveryCard
            text1={"98635343"}
            text2={"ORD-0948"}
            src="cap.png"
            style1={{
              borderRadius: "12px",
              boxShadow: "-4px 0px 0px 0px  #22577a",
              border: "0.2px solid #22577a",
            }}
            style2={{ display: "none" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <DeliveryCard
            text1={"98635343"}
            text2={"ORD-0950"}
            src="shoes.png"
            src1={"cap.png"}
            className={"dCardIcon1"}
            style1={{
              borderRadius: "12px",
              boxShadow: "-4px 0px 0px 0px  #22577a",
              border: "0.2px solid #22577a",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryStatus;
