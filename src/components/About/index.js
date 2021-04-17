import React from 'react';
import "nes.css/css/nes.min.css";
function About() {
  return (
    <section>
      <h1 id="about" align="center">About Me</h1>
        <img class="is-centered" src="../../assets/img/profile-picture.JPG"/>

      <div class="nes-container with-title is-centered">
  <p class="title">Dylan Tipton</p>
  <p>Knoxville, Tennessee</p>
  <p>Email: dylan.tipton@live.com <br/> Phone Number: 423-201-5830</p><p><a href='http://github.com/tiptondt1998'>Github</a> | <a href='http://linkedin.com/in/dylan-tipton'>LinkedIn</a></p>
  <p>       
Quality focused self-motivated and committed team player with demonstrated ability in maintaining IT systems
in both client-server, stand-alone environment, handling escalated issues, providing training to new employees
and offering assistance to computer system users with regards to issues in hardware, software or networks,
maintaining and upgrading systems, conducting research and providing cost analysis data setting. Detail-oriented
professional with highly professional attitude, problem solving, strong leadership, relationship-building skills and
ability to perform well in a team. Looking for an opportunity in a dynamic organization where my skills will be
fully utilized. <br/> Willing to relocate anywhere in the continental United States.</p>

<p><b>Technical Skills</b></p>
<p>
  Programming Languages: Java 8, JavaScript, LISP, SQL(all variations)
  <br/>
  Technologies: MongoDB, HTML, CSS, Kali Linux, MERN, REACT, AWS, SQLite, Express, NodeJS, Apache Tomcat, Heroku
</p>
</div>
</section>
  );
}

export default About;
