import react from "react";
import "nes.css/css/nes.min.css";
function Projects(){

    return (
      <section>
       <div class="nes-container with-title is-centered">
       <p class="title">Projects</p>
      <p id='projects'>
      <section id="critter">
        <a href='http://crittertails.herokuapp.com'>Critter</a> is a social media website for your pets. All you have to do is sign up,
        and you'll be able to interact with other users as your own pet.
      </section>
      <br/>
      <section id="Doorman">
        <a href='http://gentle-hollows-60962.herokuapp.com/Login'>Doorman</a> was created with the aim of allowing the COVID-19 policy at 
        North Knoxville Medical Center to be more consistently enforced. When the nurse assigns a patient to a room, the screener is then
        able to add a designated visitor to that room. Once the patient has been discharged, the nurse can simply login and remove that patient,
        along with their only visitor.
      </section>
      <br/>
      <section id='Game Search'>
        <a href='https://tiptondt1998.github.io/GameSearch'>GameSearch</a> is a simple application that uses the RAWG API to fetch the top
        games of a given year. This app will then allow you to view the top 10 games of that year and display them in a grid. Clicking on the
        displayed games will then provide the rating for the game as well as a description of it.
      </section>
      </p>
      </div>
      </section>
      );

}

export default Projects;