import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Add from "./components/add";

const App = () => {
  return (
    <div>
      <Route path="/">
        <Add />
      </Route>
    </div>
  );
};

export default App;