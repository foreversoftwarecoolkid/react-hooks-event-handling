import React from "react";

function MultiButton() {
  // State to track the last clicked button
  const [lastClicked, setLastClicked] = React.useState(null);

  // Function to handle button click and update the lastClicked state
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
    setLastClicked(`Button ${number}`);
  }

  return (
    <div>
      <p>Last Clicked: {lastClicked || "No button clicked yet"}</p>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
