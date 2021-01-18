import { Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Story from "./routes/Story";
import Contents from "./routes/Contents";
import Product from "./routes/Product";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/contents" component={Contents} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
