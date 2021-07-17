import React from "react";
import { useSelector } from "react-redux";
import "./asideMenu.scss";

const asideMenu = () => {
  const asideNavLinks = [
    { icon: "fas fa-undo", link: "Yesterday" },
    { icon: "fas fa-calendar-day", link: "Today" },
    { icon: "fas fa-calendar-week", link: "Tomorrow" },
  ];
  const buttonToggle = useSelector((state) => state.burgerButtonReducer);
  return (
    <aside
      className={`asideMenu ${buttonToggle ? null : "asideMenu hideAside"}`}
    >
      <div className="upper-links">
        <nav>
          <ul>
            {asideNavLinks.map((object, id) => {
              return (
                <li key={id}>
                  {/* <Link to={`/${link.replace(/\s/g, "").toLocaleLowerCase()}`}>
                    {link}
                  </Link> */}
                  <i className={object.icon}></i>
                  <a href="">{object.link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="lower-links"></div>
    </aside>
  );
};

export default asideMenu;
