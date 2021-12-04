import "./food-drink.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FoodAndDrinkImage from "../../../../../Assets/Images/food&drink.svg";

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
              <Link
                className="user-name m-0 text-decoration-none"
                to="/channel"
              >
                Food & Drink
              </Link>
              <Link
                className="text-decoration-none text-light ms-2"
                to="/channel"
              >
                Recommended channel for you
              </Link>
            </div>
            <div className="d-flex">
              <button className="btn subscribe-btn">Subscribe 2.3m</button>
              <button className="slide-btn border-0 bg-dark">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0017 8.66612L16.5363 9.20514C16.7121 9.39201 16.8 9.61013 16.8 9.85921C16.8 10.1133 16.7121 10.329 16.5363 10.5063L13.0719 14L16.5363 17.4937C16.712 17.671 16.8 17.8867 16.8 18.1407C16.8 18.3899 16.712 18.608 16.5363 18.7949L16.0016 19.3268C15.8211 19.5089 15.6048 19.6 15.3529 19.6C15.0963 19.6 14.8825 19.5089 14.7114 19.3268L10.0709 14.647C9.89034 14.4744 9.80005 14.2589 9.80005 14C9.80005 13.746 9.89034 13.528 10.0709 13.3459L14.7114 8.66612C14.8873 8.48877 15.1011 8.40001 15.3529 8.40001C15.6001 8.40001 15.8163 8.48877 16.0017 8.66612Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="slide-btn ps-0 border-0 bg-dark">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9983 8.66612L11.4637 9.20514C11.2879 9.39201 11.2 9.61013 11.2 9.85921C11.2 10.1133 11.2879 10.329 11.4637 10.5063L14.9281 14L11.4637 17.4937C11.288 17.671 11.2 17.8867 11.2 18.1407C11.2 18.3899 11.288 18.608 11.4637 18.7949L11.9984 19.3268C12.1789 19.5089 12.3952 19.6 12.6471 19.6C12.9037 19.6 13.1175 19.5089 13.2886 19.3268L17.9291 14.647C18.1097 14.4744 18.2 14.2589 18.2 14C18.2 13.746 18.1097 13.528 17.9291 13.3459L13.2886 8.66612C13.1127 8.48877 12.8989 8.40001 12.6471 8.40001C12.3999 8.40001 12.1837 8.48877 11.9983 8.66612Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-between flex-wrap mt-4">
            {users.map((user) => (
              <li key={user.id} className="video-lists">
                <Link
                  className="text-decoration-none d-block video-name"
                  to="/youtube"
                >
                  <img
                    className="img-responsive rounded-3"
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
