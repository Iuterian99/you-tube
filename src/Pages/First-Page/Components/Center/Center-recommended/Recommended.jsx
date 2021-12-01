import "./Recommended.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Left from "../../../../../Assets/Images/left.svg";
import Right from "../../../../../Assets/Images/right.svg";

function CenterRecommended() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((data) => setUsers(data.splice(1, 3)));
  }, []);

  return (
    <>
      {users.length > 0 && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="user-name m-0">Recommended</h4>
            <div className="d-flex">
              <button className="btn">
                <img src={Left} alt="Left" width="28" height="28" />
              </button>
              <button className="btn ps-0">
                <img
                  className="img-responsive"
                  src={Right}
                  alt="Right"
                  width="28"
                  height="28"
                />
              </button>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-between flex-wrap mt-4">
            {users.map((user) => (
              <li key={user.id} className="video-lists">
                <Link
                  className="recommended-link text-decoration-none d-block"
                  to="/"
                >
                  <img
                    className="img-responsive d-block"
                    src={user.thumbnailUrl}
                    alt="random"
                    width="300"
                    height="100"
                  />
                  {user.title.split(" ").slice(0, 2).join(" ")}
                </Link>
                <div className="d-flex">
                  <div className="video-infos d-flex">
                    <p className="video-infocha m-0">80k views · 3 days ago</p>
                  </div>
                  <div className="video-infos">
                    <p className="video-infocha m-0">Dollie Blair</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CenterRecommended;
