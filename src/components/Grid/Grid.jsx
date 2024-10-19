import Card from "../Card/Card";
import "./Grid.css";
const Grid = ({ numberOfCards }) => {
  return (
    <div className="grid_Container">
      {Array(numberOfCards)
        .fill(<Card />)
        .map((cardEle, id) => {
          return <Card key={id} />;
        })}
    </div>
  );
};

export default Grid;
