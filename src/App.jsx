import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}
header();

function App() {
  return (
    <>
      <header />
      <h1>헬로우, 리엑트!</h1>
    </>
  );
}

export default App;
