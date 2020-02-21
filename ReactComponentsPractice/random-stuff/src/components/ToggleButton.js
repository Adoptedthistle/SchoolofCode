import React from "react";

function ToggleButton({ isOn, handleClick }) {
  //const [isOn, setIsOn] = useState(false);
  //function handleClick() {
  //setIsOn(!isOn);
  //}
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isOn ? "dodgerblue" : "#ccc"
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;
