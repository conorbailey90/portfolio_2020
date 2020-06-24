import React from "react";
import "./ModeToggle.css";

interface ModeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const ModeToggle = (props: ModeToggleProps) => {
  return (
    <div onClick={() => props.toggleTheme()} className="mode-switch">
      <div
        className={
          props.theme === "light" ? "mode-ball-light" : "mode-ball-dark"
        }
      ></div>
    </div>
  );
};

export default ModeToggle;
