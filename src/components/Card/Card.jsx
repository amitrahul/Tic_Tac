import Icon from "../Icon/Icon";
import "./Card.css";
const Card = ({ onPlay, player, position, gameEnd }) => {
  console.log("gameEnd", gameEnd);

  let icon = <Icon />;
  icon =
    player === "X" ? (
      <Icon name={"cross"} />
    ) : player === "O" ? (
      <Icon name={"circle"} />
    ) : (
      icon
    );
  return (
    <>
      {/* here   player === "" && onPlay(position)  signify that if play is empty then on click  on those card.
      that means if card is untouched then only hit the click event.
      */}
      <div
        className="card"
        onClick={() => !gameEnd && player === "" && onPlay(position)}
      >
        {icon}
      </div>
    </>
  );
};

export default Card;
