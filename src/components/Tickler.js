import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  // Add a state to track the number of tickles
  const [ticklesCount, setTicklesCount] = React.useState(0);

  // Update the tickle function to increment the ticklesCount
  function tickleAndCount() {
    tickle();
    setTicklesCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={tickleAndCount}>Tickle me!</button>
      <p>Total Tickles: {ticklesCount}</p>
    </div>
  );
}

export default Tickler;
