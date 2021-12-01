import "./Channel-center.css";
import React from "react";

// Importing Channel files
import ChannelHeader from "../Channel-header/Channel-header";
import Margaret from "../Channel-margaret/Margaret";

function ChannelCenter() {
  return (
    <>
      <div className="row">
        <div className="col-12">{<ChannelHeader />}</div>
      </div>
      <div className="row mt-3">
        <div className="col-12">{<Margaret />}</div>
      </div>
    </>
  );
}

export default ChannelCenter;
