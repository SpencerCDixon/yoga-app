import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Homepage";
import All from "./Body/All";

const Routes: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={All} />
      </Switch>
    </div>
  );
};

export default Routes;
