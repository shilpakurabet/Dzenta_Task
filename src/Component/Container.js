/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import SubContainer from "./SubContainer";

function Container() {
  return (
    <>
      <div className="banner"></div>
      <div className="container-fluid ps-4 d-flex  Container">
        <div>
          <Sidebar />
        </div>

        <div className="ps-4">
          <SubContainer />
        </div>
      </div>
    </>
  );
}

export default Container;
