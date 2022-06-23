/** @format */

import React from "react";
import DeliveryStatus from "./DeliveryStatus";
import Navbar from "./Navbar";
import OrderStatuscard from "./OrderStatuscard";
import OverviewCard from "./OverviewCard";

function SubContainer() {
  return (
    <div className="row  mb-3">
      <div className="mb-4">
        <Navbar />
      </div>

      <div className="d-flex mb-4">
        <OrderStatuscard
          orderStatus="Pending Order"
          howMany={"202"}
          src={"orders.png"}
          style={{ backgroundColor: "lightGray" }}
        />

        <OrderStatuscard
          orderStatus="Processing Order"
          howMany={"99"}
          src={"react.png"}
          style={{ backgroundColor: "orange" }}
        />

        <OrderStatuscard
          orderStatus="Ready To Deliver "
          howMany={"263"}
          src={"thumbs-down.png"}
          style={{ backgroundColor: "#70e000" }}
        />

        <OrderStatuscard
          orderStatus="Delivered  Order"
          howMany={"345"}
          src={"check.png"}
          style={{ backgroundColor: "#548CFF" }}
        />
      </div>
      <div className="d-flex">
        <DeliveryStatus />
        <div className="tdy">
          <OverviewCard />
        </div>
      </div>
    </div>
  );
}

export default SubContainer;
