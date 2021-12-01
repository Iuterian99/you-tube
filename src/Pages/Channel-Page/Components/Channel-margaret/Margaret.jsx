import "./Margaret.css";

import MargaretImage from "../../../../Assets/Images/margaret.svg";

function Margaret() {
  return (
    <>
      <div className="margret-heading d-flex justify-content-between align-items-center">
        <div className="margret-heading-left d-flex align-items-center">
          <img src={MargaretImage} alt="Margaret" width="50" height="50" />
          <div className="user-info-part ms-3">
            <h4 className="user-name m-0">Margaret Phelps</h4>
            <p className="user-info m-0">245K subscribed</p>
          </div>
        </div>
        <button className="btn subscribe-btn">Subscribe 2.3m</button>
      </div>
    </>
  );
}

export default Margaret;
