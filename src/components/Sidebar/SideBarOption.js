import React from "react";
import "./Sidebar.css";

function SideBarOption({ active, text, Icon }) {
  return (
    <div className="sidebarOption">
      <div className="icon">
        <Icon />
      </div>
      <div className="text">
        {" "}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default SideBarOption;
