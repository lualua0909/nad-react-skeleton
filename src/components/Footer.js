import { APP_NAME } from "../config/env.config";
import { Link } from "react-router-dom";

const COPYRIGHT_ENTITY = `Copyright © ${new Date().getFullYear()} ${APP_NAME?.toLowerCase()}.com`;

const Footer = () => (
  <footer className="footer">
    <div className="buttons">
      <Link
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
        className="button is-medium"
        to="https://github.com/based-ghost"
      >
        Github
      </Link>
    </div>
    <div className="content has-text-centered">{COPYRIGHT_ENTITY}</div>
  </footer>
);

export default Footer;
