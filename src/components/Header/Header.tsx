import { useState } from "react";
import AlienIcon from "../Icon/Assets/alien-svgrepo-com.svg";
import "./header.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
const moreOptions = [
  {
    name: "About Us",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Vision",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Mission",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Directors",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Others",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Address",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Social Media",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
  {
    name: "Contacts",
    onclick: () => {
      <Link to={"/aboutus"}></Link>;
    },
  },
];
function Header() {
  const [openMoreMenu, setOpenMoreMenu] = useState(false);

  const onOutsideClickListener = (evt: any) => {
    if (!evt?.srcElement?.className?.includes("more-button")) {
      setOpenMoreMenu(false);
    }
    console.log(evt);
  };

  document.addEventListener("click", onOutsideClickListener);

  return (
    <>
      <div className="header-container">
        <div className="company-detail">
          <div className="company-icon">
            <Icon icon={AlienIcon} width="20"></Icon>
          </div>
          <div className="company-name">Company Name</div>
        </div>
        <button
          className="more-button"
          onClick={() => {
            setOpenMoreMenu(!openMoreMenu);
          }}
        >
          More
        </button>
      </div>
      {openMoreMenu && (
        <div className="more-menu">
          {moreOptions.map((option) => (
            <div className="more-options" onClick={option.onclick}>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
