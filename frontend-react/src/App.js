import "./App.css";
import { FixedHeader } from "./components";
import { Footer, Header } from "./containers";
import {
  Home,
  NoPage,
  About,
  Chef,
  MenuPage,
  BlogPage,
  Contact,
  Login,
  Register,
} from "./pages";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

const CustomRoute = ({ isHome, component: Component, ...rest }) => {
  const loc = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          {isHome ? (
            <Header />
          ) : (
            <FixedHeader name={loc.pathname.split("/")[1]} />
          )}
          <Component {...props} />
          <Footer />
        </div>
      )}
    />
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <CustomRoute path="/" exact isHome component={Home} />
          <CustomRoute path="/about" component={About} />
          <CustomRoute path="/chef" component={Chef} />
          <CustomRoute path="/menu" component={MenuPage} />
          <CustomRoute path="/blog" component={BlogPage} />
          <CustomRoute path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
