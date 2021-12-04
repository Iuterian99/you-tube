import "./Home-link.css";
import { Link } from "react-router-dom";

import HomeImage from "../../../../../Assets/Images/home-video.svg";

function HomeLink() {
  return (
    <div className="d-flex align-items-center">
      <Link className="home-video-link" to="/youtube">
        <img
          className="img-responsive"
          src={HomeImage}
          alt="Home"
          width={300}
          height={100}
        />
      </Link>
      <div className="home-text ms-2">
        <h3 className="home-heading text-light">
          Choosing The Best Audio Player Software For Your Computer
        </h3>
        <p className="home-paragraph">
          Your cheap internet-based banner advertising will become one of the
          sought for ads there are. Today, the world of Internet advertising is
          rapidly evolving beyond banner ads and intrusive pop-ups.
        </p>
        <p className="home-video-info">11k views · 6 months ago</p>
      </div>
    </div>
  );
}

export default HomeLink;
