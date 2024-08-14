import  '../styles/App.css';

import { About } from './About';
import { NavBar } from './NavBar';
import { Form } from './Form';


import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import { RequestList } from './RequestList';

function App() {

  return (
    <>
      <div className="App">
        <Navbar collapseOnSelect expand="sm" bg="light" data-bs-theme="light">
          <NavBar />
        </Navbar>

        <body>
          <Routes>                                       {/* cia anksciau buvo Switch */}           
            <Route path='/pildyti'  element={<Form />}/>  { /* kai reikes calls i API or smth galima bus patuninti. see here  https://reactrouter.com/en/main/route/route */}
            <Route path='/paraiskos' element={<RequestList />}/> 
            <Route path='/' element={<About />} />            
          </Routes>
        </body>
      </div>
    </>
    
  );
}

export default App;
