import { useContext } from "react";
import { TermsContext } from "../../context/TermsContext";
import classes from "./Terms.styles";

export const Terms = () => {
  const terms = useContext(TermsContext);

  return (
    <section className={classes.wrapper}>
      <h4 className={classes.title}>Terms</h4>
      <ul className={classes.terms}>
        {terms.map((term: string, iter: number) => (
          <li className={classes.term} key={iter}>
            {term}
          </li>
        ))}
      </ul>
    </section>
  );
};
