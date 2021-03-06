import React, { useEffect } from 'react';
import contactForm from "../Contact";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav( {handlePageChange})  {
return(
<header>
  <h1>Dylan Tipton</h1>
  <nav>
    <ul>
      <li
      className="bottom-list-border"
      onClick={() => {
        handlePageChange("About");
      }}>
        About Me
      </li>

      <li
      className="bottom-list-border"
      onClick={() => {
        handlePageChange("Resume");
      }}>
        Resume
        </li>
      <li
      className="bottom-list-border"
      onClick={() => {
        handlePageChange("Contact");
      }}>
        Contact
     </li>
    </ul>
  </nav>
</header>
)
}

export default Nav;
