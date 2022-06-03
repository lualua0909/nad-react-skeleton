import { NavLink } from "react-router-dom";
import { routes } from "../config/routes.config";

const Navbar = () => (
  <nav role="navigation" className="navbar" aria-label="Main navigation">
    <div className="navbar-wrapper">
      <div className="navbar-routes">
        {routes.map(({ path, name }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              "navbar-item" + (isActive ? " is-active" : "")
            }
            style={{ marginRight: 50 }}
          >
            <span>{name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
