import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import list_nav_menu from "../../data/nav_menu";

const Menu = props => {
  return (
    <ul className=" list-unstyled mr-auto d-flex justify-content-between ">
      {list_nav_menu.map(e => (
        <li className="mx-3 h4" key={e.id}>
          <NavLink to={e.to} className="">
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
export default Menu;
