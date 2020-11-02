import React, { useState, useEffect } from 'react';

import Landing from "./Components/Landing";
import Delivery from "./Components/Delivery";
import Checkout from "./Components/Checkout/Checkout";
import Confirmation from "./Components/Confirmation";

import Shop from './Shop';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Switch>
        <Route
          path="/delivery"
          render={(...props) => <Shop {...props} activePath={"delivery"} />}
        />
        <Route
          path="/confirmation"
          render={(...props) => <Shop {...props} activePath={"confirmation"} />}
        />
        <Route
          path="/checkout"
          render={(...props) => <Shop {...props} activePath={"checkout"} />}
        />
        <Route
          path="/soup"
          render={(...props) => <Shop {...props} activePath={"soup"} />}
        />
        <Route
          path="/protein"
          render={(...props) => <Shop {...props} activePath={"protein"}></Shop>}
        />
        <Route
          path="/extras"
          render={(...props) => <Shop {...props} activePath={"extras"}></Shop>}
        />
        <Route
          path="/beverage"
          render={(...props) => (
            <Shop {...props} activePath={"beverage"}></Shop>
          )}
        />
        <Route
          path="/confirmation"
          render={(...props) => (
            <Shop {...props} activePath={"confirmation"}></Shop>
          )}
        />
        {/* <Route
          path="/landing"
          render={(...props) => <Shop {...props} activePath={"landing"}></Shop>}
        /> */}
        <Route
          path="/"
          render={(...props) => <Shop {...props} activePath={"landing"}></Shop>}
        />
        {/* <Route path="/" component={Landing} /> */}
      </Switch>
    </Router>
  );
}

export default App;
/*
1. fixa alla .js-filer i constans (bread, spread etc. OBS välj ett singular lr plural, samma på *ALLA* ställen)
2. importa dessa filer där de behövs, ställ om "pekare", kolla att d funkar, kommentera bort det håtdkodade
3. bygg alla vyer, styla på bara, skit i state, se till att data läses in från js-filerna
4. skicka med state (t.ex soup) och funktion för att modifiera state (t.ex setSoup) till de vy-kompoenenter som behvöer dem
5. labba med funktionerna för att manipula statet. t.ex: jag la till ett bread -> setBread({...bread, {newBreadObject}})
6. obs att detta kommer trigga en re-render. möjlit att popup försvinner. isf behvöer nog nog ha varje vys popup state i app oxo. men den tiden den sorgen!
*/