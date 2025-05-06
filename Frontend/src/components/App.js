import "../styles/App.css";

import { About } from "./About";
import { NavBar } from "./NavBar";
import { RequestForm } from "./RequestForm";

import { ToastContainer } from "react-toastify";

import Navbar from "react-bootstrap/Navbar";
import { Route, Routes } from "react-router-dom";
import { RequestList } from "./RequestList";

function App() {
  return (
    <>
      <div className="NavBar">
        <Navbar collapseOnSelect expand="sm" data-bs-theme="light">
          <NavBar />
        </Navbar>
      </div>

      <body>
        <div className="container mt-5">
          <Routes>
            {" "}
            {/* cia anksciau buvo Switch */}
            <Route path="/pildyti" element={<RequestForm />} />{" "}
            {/* kai reikes calls i API or smth galima bus patuninti. see here  https://reactrouter.com/en/main/route/route */}
            <Route path="/paraiskos" element={<RequestList />} />
            <Route path="/" element={<About />} />
          </Routes>

          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </body>
    </>
  );
}

export default App;
