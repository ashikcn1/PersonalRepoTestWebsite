import Header from "../../components/Header/Header";
import "./defaultApp.css";

function DefaultAppLook() {
  return (
    <div className="default-container">
      <div className="default-header">
        <Header></Header>
      </div>
      <div className="default-body"></div>
    </div>
  );
}

export default DefaultAppLook;
