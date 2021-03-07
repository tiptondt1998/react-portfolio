import react, {useState} from 'react';
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from './components/Contact';
import Resume from "./components/Resume";
import Projects from "./components/projects";
import "nes.css/css/nes.min.css";

const Page = ({name}) => {
  switch(name){
    case 'About': return <About />;
    case 'Resume': return <Resume />;
    case 'Contact': return <Contact />;
    case 'Projects': return <Projects />
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (value) => setCurrentPage(value);

  return(
    <div>
     
      <div>
        <Page name={currentPage} />
      </div> 
      <div id="nav">
      <Nav handlePageChange ={handlePageChange} />
      </div>
    </div>
  )
}

export default App;
