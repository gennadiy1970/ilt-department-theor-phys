import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home";
import International_cooperation from "../../pages/international_cooperation";
import User from "../../pages/user";
import History from "../../pages/history";
import Monographies from "../../pages/monographies";
import Dissertations from "../../pages/dissertations";
import PageNotFound from "../../pages/pageNotFound";
import stuff_list from "../../data/stuff_list";
import Results from "../../pages/results";
import krive from "../../data/krive";
import Awards_and_grants from "../../pages/awards_and_grants";
import We_remember from "../../pages/we_remember";
// import charkina from "../../data/charkina";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/we_remember" component={We_remember} />
        <Route path="/history" component={History} />
        <Route path="/monographies" component={Monographies} />
        <Route path="/dissertations" component={Dissertations} />
        <Route path="/results" component={Results} />
        <Route path="/user/krive" render={() => <User extraProp={krive} />} />
        <Route path="/awards_and_grants" component={Awards_and_grants} />
        {/* <Route
          path="/user/charkina"
          render={() => <User extraProp={charkina} />}
        /> */}
        {stuff_list.map(e => (
          <Route
            key={e.id}
            path={"/user/" + e.id}
            render={() => <User extraProp={e} />}
          />
        ))}
        <Route
          path="/international_cooperation"
          component={International_cooperation}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Fragment>
  );
};
export default App;
