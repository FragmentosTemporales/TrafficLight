import './App.css';
import {useState} from 'react'

function TrafficLight() {
  const [select, setSelect] = useState("green");

  return (
    <div className="semaforo" >
      <button 
      onClick={()=> setSelect("red")}
      id="light" className={"row red" +((select==="red") ? " on" : "")}></button>
      <button
      onClick={()=> setSelect("yellow")}
      id="light" className={"row yellow" +((select==="yellow") ? " on" : "")}></button>
      <button 
      onClick={()=> setSelect("green")}
      id="light" className={"row green" +((select==="green") ? " on" : "")}></button>
    </div>
  );
}


export default TrafficLight;
