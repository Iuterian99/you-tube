import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

// Importing Components
import LeftNavbar from "./Pages/First-Page/Components/Left-navbar/Left-navbar";
import Center from "./Pages/First-Page/Components/Center/Center";
import TopHeader from "./Pages/Top-header/Top-header";
import Youtube from "./Pages/YouTube-page/Youtube";
import ChannelCenter from "./Pages/Channel-Page/Components/Channel-center/Channel-center";

function App() {
  return (
    <>
      <div className="row pe-0 mb-5">
        <div className="col-12 fixed-top">{<TopHeader />}</div>
      </div>
      <div className="row bg-dark pe-3">
        <div className="col-3 pe-0">{<LeftNavbar />}</div>
        <div className="col-9 ps-0">
          <Switch>
            <Route path="/channel" exact>
              {<ChannelCenter />}
            </Route>
            <Route path="/" exact>
              {<Center />}
            </Route>
            <Route path="/youtube" exact>
              {<Youtube />}
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
