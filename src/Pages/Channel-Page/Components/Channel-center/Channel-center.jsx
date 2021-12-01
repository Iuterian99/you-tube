import "./Channel-center.css";
import React from "react";

// Importing Channel files
import ChannelHeader from "../Channel-header/Channel-header";

function ChannelCenter() {
  return (
    <>
      <div className="row">
        <div className="col-12">{<ChannelHeader />}</div>
      </div>
    </>
  );
}

export default ChannelCenter;
