import "./App.css";
import Card from "./components/card.js";
cdimport CardAnimated from "./components/CardAnimated.js";git add README.mdgit push -u origin main
import Masonry from "masonry-layout";
import React from "react";
import "typeface-comfortaa";
import Header from "./components/Header.js";
import Grid from "./components/Grid.js";
import Overlay from "./components/Overlay";
// import Card3 from "./components/Сard3.js";
// import Grid from "./components/grid.js";




function App() {

  return (
    <div className="wrapper clear">
      {/* <Overlay></Overlay> */}
      <Header></Header>
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
    </div >

  );
}
export default App





