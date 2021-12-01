import "./Channel-header.css";
import React from "react";

import ChannelCover from "../../../../Assets/Images/channel-cover.svg";

function ChannelHeader() {
  return (
    <>
      <img
        className="img-responsive cover-image"
        src={ChannelCover}
        alt="ChannelCover"
        width="100%"
        height="100%"
      />
    </>
  );
}

export default ChannelHeader;
