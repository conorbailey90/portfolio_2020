import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    let cursorOne = document.querySelector(".inner-circle") as HTMLElement;
    let cursorTwo = document.querySelector(".outer-circle") as HTMLElement;
    const moveCursor = (e: any) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      cursorOne.style.top = `${mouseY}px`;
      cursorOne.style.left = `${mouseX}px`;
      cursorTwo.style.top = `${mouseY}px`;
      cursorTwo.style.left = `${mouseX}px`;
    };
    window.addEventListener("mousemove", moveCursor);
  });

  return (
    <div>
      <div className="outer-circle"></div>
      <div className="inner-circle"></div>
    </div>
  );
};

export default Cursor;
