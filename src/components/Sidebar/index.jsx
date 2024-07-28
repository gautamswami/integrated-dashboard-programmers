import React from "react";
import "./sidebar.css";
export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <div className="profileContainer">
        <img src="/logo.png" alt="logo" className="profileImg" />
        <h3 className="profileName">
          John Doe
          <p className="profileEmail">exampl@gmail.com</p>
        </h3>
      </div>
    </div>
  );
}
