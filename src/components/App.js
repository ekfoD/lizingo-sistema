import { About } from './About';
import  '../styles/App.css';
import { NavBar } from './NavBar';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="sm" bg="light" data-bs-theme="light">
        <NavBar />
      </Navbar>

      <body>
        <About />
      </body>
    </div>
  );
}

export default App;
