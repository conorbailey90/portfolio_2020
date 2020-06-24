import React, { useState } from "react";

import Sketch from "react-p5";

const Canvas = () => {
  let [points, setPoints] = useState<any[]>([]);
  let loop: number = 0;
  let rowNum: number = 7;
  let colNum: number = 7;

  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth * 0.2, window.innerWidth * 0.2).parent(
      canvasParentRef
    ); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

    let newPoints: any = [];
    for (let r = 1; r <= rowNum; r++) {
      let row: object[] = [];
      for (let c = 1; c <= colNum; c++) {
        let x =
          r % 2 === 1
            ? (c * p5.width) / colNum
            : (c * p5.width) / colNum + p5.width / colNum / 2;
        row.push({ x: x, y: (r * p5.height) / rowNum });
      }
      newPoints.push(row);
    }

    setPoints(newPoints);
  };

  const draw: any = (p5: any) => {
    p5.noFill();
    if (localStorage.getItem("theme") === "light") {
      p5.background("#fbf9f9");
    } else {
      p5.background("#252422");
    }

    p5.stroke(255, 255, 255);

    if (loop === 10000) {
      p5.noLoop();
    }

    for (let r = 0; r < rowNum - 2; r++) {
      for (let c = 0; c < colNum - 2; c++) {
        if (Math.random() > 0.5) {
          points[r][c].x += p5.random(0.01, 0.2);
          points[r][c].y += p5.random(0.01, 0.2);
        } else {
          points[r][c].x -= p5.random(0.01, 0.2);
          points[r][c].y -= p5.random(0.01, 0.2);
        }

        if (r % 2 === 0) {
          drawTriangle(points[r][c], points[r][c + 1], points[r + 1][c], p5);
          drawTriangle(
            points[r + 1][c],
            points[r + 1][c + 1],
            points[r][c + 1],
            p5
          );
        } else {
          drawTriangle(
            points[r][c],
            points[r + 1][c],
            points[r + 1][c + 1],
            p5
          );
          drawTriangle(
            points[r][c],
            points[r][c + 1],
            points[r + 1][c + 1],
            p5
          );
          if (c !== colNum - 3) {
            p5.line(
              points[r][c].x,
              points[r][c].y,
              points[r][c + 1].x,
              points[r][c + 1].y
            );
          }
        }
      }
    }
    loop++;
  };

  function drawTriangle(pointA: any, pointB: any, pointC: any, p5: any) {
    p5.fill("#252422");
    p5.noStroke();
    p5.strokeWeight(1);
    p5.triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y);
    p5.stroke("#FDCBA7");
    p5.line(pointA.x, pointA.y, pointB.x, pointB.y);
    p5.line(pointA.x, pointA.y, pointC.x, pointC.y);
    p5.line(pointB.x, pointB.y, pointC.x, pointC.y);
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
