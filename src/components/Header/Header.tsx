import { FaCog } from "react-icons/fa";
import classes from "./Header.styles";

export const Header = () => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Photo Book</h2>
      <button name="settings">
        <FaCog size={32} />
      </button>
    </section>
  );
};
