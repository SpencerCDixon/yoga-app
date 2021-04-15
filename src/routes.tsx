import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Homepage";
import All from "./Body/All";
import Vinyasa from "./Body/Vinyasa";
import Bikram from "./Body/Bikram";
import Yin from "./Body/Yin";

const Routes: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={All} />
        <Route exact path="/vinyasa" component={Vinyasa} />
        <Route exact path="/bikram" component={Bikram} />
        <Route exact path="/yin" component={Yin} />
      </Switch>
    </div>
  );
};

export default Routes;
