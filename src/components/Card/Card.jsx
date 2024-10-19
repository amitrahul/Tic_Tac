import Icon from "../Icon/Icon";
import "./Card.css";
const Card = ({ iconName }) => {
  return (
    <>
      <div className="card">
        <Icon name={iconName || ""} />
      </div>
    </>
  );
};

export default Card;
