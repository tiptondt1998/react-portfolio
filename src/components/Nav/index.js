import React, { useEffect } from 'react';
import contactForm from "../Contact";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav( {handlePageChange})  {
return(
<header>
  <nav>
    <ul>
      <li class="nes-btn" href="#"
      onClick={() => {
        handlePageChange("About");
      }}>
        About Me
      </li>

      <li class="nes-btn" href="#"
      onClick={() => {
        handlePageChange("Resume");
      }}>
        Resume
        </li>
      <li class="nes-btn" href="#"
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
