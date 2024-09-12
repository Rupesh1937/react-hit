import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <h1 className="text-3xl bg-gray-900">Vite with Tailwind</h1>
      <Card userName = "RKP" place ="I am the place motherfucker"/>
      <Card myArr = {[1,2,3]}/>
      <Card />
      
    </>
  );
}

export default App;
