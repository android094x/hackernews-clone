import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header.component";
import Stories from "./components/Stories/Stories.component";
import { StoryProvider } from "./contexts/StoryContext";

const App = () => {
  return (
    <div className="App">
      <StoryProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Stories endpoint="newstories" />
            </Route>
            <Route path="/topstories" exact>
              <Stories endpoint="topstories" />
            </Route>
            <Route path="/beststories" exact>
              <Stories endpoint="beststories" />
            </Route>
            <Route path="/job" exact>
              <Stories endpoint="jobstories" />
            </Route>
            <Route path="/ask" exact>
              <Stories endpoint="askstories" />
            </Route>
            <Route path="/show" exact>
              <Stories endpoint="showstories" />
            </Route>
          </Switch>
        </BrowserRouter>
      </StoryProvider>
    </div>
  );
};

export default App;
