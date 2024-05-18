import React, { useState } from "react";
import { serviceDropdown } from "../NavItems";
import "./Dropdown.css";
const Dropdownn = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id} className={item.cName}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdownn;
