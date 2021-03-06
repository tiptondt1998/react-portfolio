import react, {useState} from 'react';
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from './components/Contact';
import Resume from "./components/Resume";

const Page = ({name}) => {
  switch(name){
    case 'About': return <About />;
    case 'Resume': return <Resume />;
    case 'Contact': return <Contact />;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (value) => setCurrentPage(value);

  return(
    <div>
      <Nav handlePageChange ={handlePageChange} />
      <div>
        <Page name={currentPage} />
      </div>
    </div>
  )
}

export default App;
