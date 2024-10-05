import React from "react";
import Header from "./components/Header/Header";
import DefaultAppLook from "./DefaultLook/defaultApp/DefaultAppLook";
import "./appinit.css";
function AppInit() {
  return (
    <div className="app-style">
      <DefaultAppLook></DefaultAppLook>
    </div>
  );
}

export default AppInit;
