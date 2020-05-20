import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/pages/Navtabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Hero from "./components/Hero";
import CLIPage from "./components/pages/CLIPage";

function App() {
  return (
    <Router basename={"/ReactPortfolio"}>
      <div>
        <NavTabs />
        <Hero />
        <br />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/clipage"component={CLIPage} />
      </div>
    </Router>
  );
}

export default App;
