import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import classes from "./Footer.styles";

export const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <section className={classes.container}>
        <h3 className={classes.title}>Get in touch</h3>
        <ul className={classes.social}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <FaFacebookSquare size={42} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <FaTwitterSquare size={42} />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
