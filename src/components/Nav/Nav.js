import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import list_nav_menu from "../../data/nav_menu";

const Nav = props => {
  // const pageURI = window.location.pathname + window.location.search;
  // const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  return (
    <ul className="navbar-nav mr-auto">
      {list_nav_menu.map(e => (
        <li className="nav-item mx-3 h5" key={e.id}>
          <NavLink to={e.to} className="nav-link text-truncate" exact>
            <FormattedMessage
              id={e.id}
              defaultMessage={e.defaultMessage}
              description={e.description}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Nav;
