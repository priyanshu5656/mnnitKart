import {React} from 'react'
import  logo from "../pictures/logo.png"
import {Link} from "react-router-dom"
const Navbar =(props) =>{
    let setLogIn= props.setLogIn;
    let logIn =props.logIn;
    return (
        <div>
        <Link to="/" >
        <img src={logo} alt='logo' height={80} width={100}/>
        </Link>
        <nav>
        <Link to="/" >
            HOME
        </Link>
         </nav>
       <div>
        { !logIn &&
        <Link to="/login">
            <button onClick={()=>{
                setLogIn(!logIn);
            }}>Login</button>
        </Link>
        }
       { logIn && <Link to="/">
            <button onClick={()=>{
                setLogIn(!logIn);
            }}>LogOut</button></Link>}
        {!logIn &&
        <Link to="/signup">
            <button>SignUp</button>
        </Link>}
        {logIn &&<Link to="/dash">
            <button>DashBourd</button>
        </Link>}
       </div>
       
        </div>
        
    );
}
 export default Navbar;