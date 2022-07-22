import React from "react";

import { Button } from "./components/Button";

function App() {
  const [clickNumber, setClickNumber] = React.useState(0);
  const [reset, setReset] = React.useState(false);

  return (
    <div className="appContainer">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            setReset(false);
            setClickNumber(clickNumber + 1);
          }}
          style={{ marginRight: "1rem" }}
        >
          Click me
        </Button>
        <Button
          variant="error"
          onClick={() => {
            setReset(true);
            setClickNumber(0);
          }}
        >
          Reset
        </Button>
      </div>
      {!!clickNumber && (
        <div style={{ margin: "1rem auto" }}>
          <span>Button was clicked {clickNumber} times</span>
        </div>
      )}
      {reset && (
        <div style={{ margin: "1rem auto" }}>
          <span>
            Number of clicks was reset and now shows {clickNumber} clicks
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
