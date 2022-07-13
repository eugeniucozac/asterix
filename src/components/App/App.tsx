import { TermsContext } from "../../context/TermsContext";
import { terms } from "../../data/data";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Terms } from "../Terms";
import { Books } from "../Books";
import { Users } from "../Users";
import { JoinNow } from "../JoinNow";
import classes from "./App.styles";

export const App = () => {
  return (
    <TermsContext.Provider value={terms}>
      <section className={classes.wrapper}>
        <section className={classes.content}>
          <Header />
          <JoinNow />
          <Users />
          <Books />
          <Terms />
        </section>
        <Footer />
      </section>
    </TermsContext.Provider>
  );
};
