import logo from "./logo.svg";
import "./App.css";
import VirtualScroll from "./components/VirtualScroll";
import React, { memo, useState } from "react";
const Item = memo(({ index }) => (
  <div
    style={{
      height: 30,
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 10px",
    }}
    className="row"
    key={index}
  >
    Ticket index number {index}
  </div>
));
function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="App">
        <h1>PlanRadar Task for Virtual Scroll </h1>
        {isVisible ? (
          <VirtualScroll
            itemCount={1000000}
            height={500}
            childHeight={30}
            Item={Item}
          />
        ) : null}
        <hr />
      </div>
    </>
  );
}
export default App;
