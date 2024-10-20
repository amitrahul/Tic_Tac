import Icon from "../Icon/Icon";
import "./Card.css";
const Card = ({ onPlay, player, position }) => {
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
      <div className="card" onClick={() => onPlay(position)}>
        {icon}
      </div>
    </>
  );
};

export default Card;
