import React, { useState } from "react";

import Sketch from "react-p5";

const Canvas2 = () => {
  let [lines, setLines] = useState<any[]>([]);

  let x: number;
  let y: number;
  let gap: number = 11;

  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(140, 140).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

    y = 50;
    x = 10;

    for (let r = 0; r < 9; r++) {
      let row = [];
      y -= 5;
      for (let c = 0; c < 9; c++) {
        let x1 = x;
        let y1 = y;
        let x2 = x;
        let y2 = y1 + p5.height / 1.8;
        row.push({
          x1,
          y1,
          x2,
          y2,
        });
        x += gap;
      }
      x -= 95;
      lines.push(row);
    }
  };

  const draw: any = (p5: any) => {
    p5.strokeWeight(1);

    if (localStorage.getItem("theme") === "light") {
      p5.background("#fbf9f9");
      p5.stroke("#252422");
    } else {
      p5.background("#252422");
      p5.stroke("#fbf9f9");
    }

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        p5.line(lines[r][c].x1, lines[r][c].y1, lines[r][c].x2, lines[r][c].y2);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas2;
