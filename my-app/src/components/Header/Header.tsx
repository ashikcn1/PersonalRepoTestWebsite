import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="company-detail">
        <div className="company-icon">Company Icon</div>
        <div className="company-name">Company Name</div>
      </div>
      <button className="more-button">...</button>
    </div>
  );
}

export default Header;
