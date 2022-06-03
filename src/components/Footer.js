import { APP_NAME } from "../config/env.config";

const COPYRIGHT_ENTITY = `Copyright © ${new Date().getFullYear()} ${APP_NAME?.toLowerCase()}.com`;

const Footer = () => (
  <footer className="footer">
    <div className="buttons">
      <a
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
        className="button is-medium"
        href="https://github.com/based-ghost"
      >
        Github
      </a>
    </div>
    <div className="content has-text-centered">{COPYRIGHT_ENTITY}</div>
  </footer>
);

export default Footer;
