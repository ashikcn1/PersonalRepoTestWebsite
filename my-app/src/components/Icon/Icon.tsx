import React from "react";
import alienIcon from "./Assets/alien-svgrepo-com.svg";
function Icon({ icon, width }: { icon: string; width: string }) {
  return <img src={icon} alt="missing Icon" width={width} />;
}
export default Icon;
