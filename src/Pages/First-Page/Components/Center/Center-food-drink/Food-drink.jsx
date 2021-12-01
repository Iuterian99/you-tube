import "./food-drink.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FoodAndDrinkImage from "../../../../../Assets/Images/food&drink.svg";
import Left from "../../../../../Assets/Images/left.svg";
import Right from "../../../../../Assets/Images/right.svg";

function FoodAndDrink() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((data) => setUsers(data.splice(1, 6)));
  }, []);

  return (
    <>
      {users.length > 0 && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <div className="left-option d-flex align-items-center">
              <img
                className="img-responsive me-2"
                src={FoodAndDrinkImage}
                alt="FoodAndDrink"
                width="50"
                height="50"
              />
              <h4 className="user-name m-0">Food & Drink</h4>
              <Link className="text-decoration-none text-light ms-2" to="/">
                Recommended channel for you
              </Link>
            </div>
            <div className="d-flex">
              <button className="btn subscribe-btn">Subscribe 2.3m</button>
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
                  className="text-decoration-none d-block video-name"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={user.thumbnailUrl}
                    alt="random"
                    width="150"
                    height="150"
                  />
                  {user.title.split(" ").slice(0, 2).join(" ")}
                </Link>
                <div className="d-flex">
                  <div className="video-infos d-flex">
                    <p className="video-info m-0">80k views · 3 days ago</p>
                  </div>
                  <div className="video-infos">
                    <p className="video-info m-0">Dollie Blair</p>
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

export default FoodAndDrink;
