/** @format */

import React from "react";
import Icon from "./Icon";
import Menus from "./Menus";
const Sidebar = () => {
  return (
    <div className="col-lg-12 col-md-2 col-sm-2 bg-white sidebarDiv ">
      <div className="lists">
        <div className=" mb-4 mt-2 menuTitle d-flex pt-4 ps-3">
          <div>
            <Icon src={"laundry.png"} className={"icon"} />
          </div>
          <div className="laundry"> laundry</div>
        </div>

        <Menus src={"home.png"} menuName={"Dashboard"} />
        <Menus src={"pos.png"} menuName={"pos"} />
        <Menus src={"orders.png"} menuName={"orders"} />
        <Menus src={"orderStatus.png"} menuName={"order status screen"} />
        <Menus src={"expenses.png"} menuName={"expense"} />
        <Menus src={"customer.png"} menuName={"customer"} />
        <Menus src={"services.png"} menuName={"service"} />
        <Menus src={"reports.png"} menuName={"reports"} />
        <Menus src={"tools.png"} menuName={"tools"} />
        <Menus src={"logout.png"} menuName={"logout"} />
      </div>
    </div>
  );
};

export default Sidebar;
