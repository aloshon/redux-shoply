import React from "react";
import { Route, Switch} from "react-router-dom";
import ShoplyHome from "./ShoplyHome";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <ShoplyHome />
            </Route>
            <Route exact path="/inventory/:id" >
                <ItemDetails />
            </Route>
            <Route exact path="/cart" >
                <Cart />
            </Route>
            <Route>
                <h1>ERROR 404</h1>
                <p>Hmmm. I can't seem to find what you want...</p>
                <img src=
                "https://icon2.cleanpng.com/20180207/rdq/kisspng-http-404-error-message-clip-art-small-alligator-web-design-vector-material-damage-5a7b2ee406de37.8236082415180223720281.jpg"
                alt="Error 404"
                />
            </Route>
        </Switch>
      );
}

export default Routes