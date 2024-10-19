import { FaTimes, FaPen, FaCircle } from "react-icons/fa";
function Icon({ name }) {
  return name === "circle" ? (
    <FaCircle />
  ) : name === "cross" ? (
    <FaTimes />
  ) : (
    <FaPen />
  );
}

export default Icon;
