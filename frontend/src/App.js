import Navbar from "./components/Navbar"
import  {Home} from "./components/pages/Home"
import  {Login} from "./components/pages/Login"
import  {SignUp} from "./components/pages/SignUp"
import  {Dash} from "./components/pages/Dash"
import { Route, Routes } from "react-router-dom";
import './App.css';
import { useState } from "react"


function App() {
  const [logIn, setLogIn] = useState(false);
  return (
    <div>
      <Navbar logIn={logIn} setLogIn={setLogIn}/>
      <Routes>
        <Route path= "/" elements= {<Home/>}/>
        <Route path="/login"  element ={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashbourd" element={<Dash/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
