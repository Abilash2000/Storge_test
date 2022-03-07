import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import AddButton from "./components/buttons/Add/AddButton";
import { viewFriends } from "./pages/friend/viewFriends";
// import { Grid } from "./components/table/Grid/Grid";
// import Grid from "./utils/grid/Grid";

const App = () => {
  return (
    <div className="App">
      <AddButton />
      <viewFriends />
      {/* <Grid /> */}
    </div>
  );
};

export default App;
