import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleHappy] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleHappy}>{isHappy ? "Im Happy" : "Im sad"}</h1>
    </div>
  );
}

export default Toggler;
