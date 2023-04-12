import React from "react";
import Home from "../../pages/home/Home";

export default function Sidebar() {
  return (
    <div className="siderbar">
      <div className="sidebarWrapper">
        <ul className="siderList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">ホーム</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
