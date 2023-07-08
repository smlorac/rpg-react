import { useState } from "react";
import { CharSides } from "../types/CharSides";
import { mapSpots } from "../data/mapSpots";

// type Props = {
//     name: string;
// }

export const useChar = (propName: string) => {
  const [position, setPosition] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharSides>("down");
  const [name, setName] = useState(propName);

  const moveLeft = () => {
    setPosition((position) => ({
      //   x: position.x - 1,
      x: canMove(position.x - 1, position.y) ? position.x - 1 : position.x,
      y: position.y,
    }));
    setSide("left");
  };

  const moveRight = () => {
    setPosition((position) => ({
      x: canMove(position.x + 1, position.y) ? position.x + 1 : position.x,
      y: position.y,
    }));
    setSide("right");
  };

  const moveUp = () => {
    setPosition((position) => ({
      x: position.x,
      y: canMove(position.x, position.y - 1) ? position.y - 1 : position.y,
    }));
    setSide("up");
  };

  const moveDown = () => {
    setPosition((position) => ({
      x: position.x,
      y: canMove(position.x, position.y + 1) ? position.y + 1 : position.y,
    }));
    setSide("down");
  };

  const canMove = (x: number, y: number) => {
    // if (x < 0 || y < 0) {
    //   return false;
    // }

    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }

    return false;
  };

  return {
    x: position.x,
    y: position.y,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    side,
    name
  };
};
