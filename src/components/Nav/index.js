import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav( {handlePageChange})  {
return(
<header>
  <nav>
    <ul align="center">
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
       {/* <li class="nes-btn" href="#"
      onClick={() => {
        handlePageChange("Contact");
      }}>
        Contact
     </li> */}
     <li class="nes-btn" href="#"
      onClick={() => {
        handlePageChange("Projects");
      }}>
        Projects
      </li>
    </ul>
  </nav>
</header>
)
}

export default Nav;
