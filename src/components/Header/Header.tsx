import { useState } from "react";
import AlienIcon from "../Icon/Assets/logo.png";
import "./header.css";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const moreOptions = [
    {
      name: "About Us",
      onclick: () => {
        navigate('/aboutus')
      },
    },
    {
      name: "Vision",
      onclick: () => {
        navigate('/vision')
      },
    },
    {
      name: "Mission",
      onclick: () => {
        navigate('/mission')
      },
    },
    {
      name: "Directors",
      onclick: () => {
        navigate('/directors')
      },
    },
    {
      name: "Others",
      onclick: () => {
        navigate('/others')
      },
    },
    {
      name: "Address",
      onclick: () => {
        navigate('/address')
      },
    },
    {
      name: "Social Media",
      onclick: () => {
        navigate('/socialmedia')
      },
    },
    {
      name: "Contacts",
      onclick: () => {
        navigate('/contacts')
      },
    },
  ];

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
          <div className="company-name">JD CORP</div>
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
