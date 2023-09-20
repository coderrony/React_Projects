import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let obj = {
    name: "rony das",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    img: "https://picsum.photos/500/300?random=1",
  };
  let obj2 = {
    name: "Rahul Kumar",
    des: " consectetur adipisicing elit. Excepturi, debitis?",
    img: "https://picsum.photos/500/300?random=2",
  };
  let arr = [1, 2, "r"];
  return (
    <>
      <h1 className="bg-green-50 text-red-500 mb-4">Tailwind Test</h1>

      <Card obj={obj} />
      <Card obj={obj2} />
    </>
  );
}

export default App;
