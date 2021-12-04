import "./Center.css";

// Importing Functions
import CenterDollie from "./Center-dollie/Dollie";
import CenterRecommended from "./Center-recommended/Recommended";
import FoodAndDrink from "./Center-food-drink/Food-drink";

function Center() {
  return (
    <div className="center pt-3 pe-0">
      <div className="row">
        <div className="col-12 pe-0">{<CenterDollie />}</div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">{<CenterRecommended />}</div>
      </div>
      <div className="row">
        <div className="col-12">{<FoodAndDrink />}</div>
      </div>
    </div>
  );
}

export default Center;
