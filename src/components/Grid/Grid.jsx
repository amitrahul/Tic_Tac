import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const play = (position) => {
    console.log("moved played");
    board[position] = turn ? "O" : "X";
    setBoard([...board]);
    setTurn((prevTurn) => !prevTurn);
  };

  return (
    <>
      <h1 className="turn-highlight">Current Turn : {(turn && "O") || "X"} </h1>
      <div className="grid_Container">
        {/* {Array(numberOfCards)
          .fill(<Card />)
          .map((cardEle, id) => {
            return <Card key={id} onPlay={play} />;
          })} */}

        {board.map((boxName, id) => (
          <Card key={id} player={boxName} onPlay={play} position={id} />
        ))}
      </div>
    </>
  );
};

export default Grid;
