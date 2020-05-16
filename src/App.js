import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Ateliers from "./components/ateliers";
import Atelier from "./components/atelier";
import Participants from "./components/participants";
import Inscriptions from "./components/inscriptions";
import PageIntrouvable from "./components/pageIntrouvable";
import Navigation from "./components/navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <main role="main" className="container">
        <Switch>
          <Route path="/ateliers/:id" component={Atelier}></Route>
          <Route path="/ateliers" component={Ateliers}></Route>
          <Route path="/participants" component={Participants}></Route>
          <Route path="/inscriptions" component={Inscriptions}></Route>
          <Route path="/page-introuvable" component={PageIntrouvable}></Route>
          <Redirect exact from="/" to="/ateliers"></Redirect>
          <Redirect to="/page-introuvable"></Redirect>
        </Switch>
      </main>
    </div>
  );
}
export default App;
