import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SeminarHallDescription from "./pages/SeminarHallDescription";
import {Booking} from "./pages/Booking";
import Footer from "./Components/footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import CoOrdiantor from "./Components/CoOrdiantor";
import SeminarHall from "./Components/SeminarHall"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Coordinator_2 from "./Components/Coordinator_2";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    console.log(auth);
  }, []);
  return (
    <div>
      {/* <BrowserRouter> */}

      <Header loggedIn={loggedIn} setloggedIn={setloggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login loggedIn={loggedIn} setloggedIn={setloggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup loggedIn={loggedIn} setloggedIn={setloggedIn} />}
        />
        {loggedIn && (
          <>
            <Route path="/seminar-hall" element={<SeminarHallDescription />} />
            <Route path="/booking" element={<Booking />} />
          </>
        )}
        <Route path="/co" element={<CoOrdiantor/>}/> 
        <Route path="/sem" element={<SeminarHall/>}/>       
        <Route path="/about" element={<About/>}/>
        <Route path="/ca" element={<Coordinator_2/>} />

        <Route path="/cont" element={<Contact/>}/>
         <Route path="*" element={<Home />} />

        </Routes>
      <Footer />

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
