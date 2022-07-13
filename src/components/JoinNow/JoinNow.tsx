import { useCountDown } from "../../hooks/useCountDown";
import { fiveDaysIn, currentDate } from "../../consts/consts";
import classes from "./JoinNow.styles";

export const JoinNow = () => {
  const targetDate = fiveDaysIn + currentDate;
  const [days, hours] = useCountDown(targetDate);

  return (
    <section className={classes.wrapper}>
      <h3 className={classes.title}>
        Read you latest photo books and get inspired!
      </h3>
      <h4 className={classes.subTitle}>
        New photos available in <span>{days}</span> d <span>{hours}</span> h
      </h4>
      <section className={classes.join}>
        <h5 className={classes.magic}>Don't miss out on the magic</h5>
        <button name="join" className={classes.button}>
          Join Now
        </button>
      </section>
    </section>
  );
};
