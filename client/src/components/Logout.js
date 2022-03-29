
import { NavLink } from "react-router-dom";

function Logout ({onLogout}){

function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
        }).then(() => onLogout());
      }

return(
    <header>
      <NavLink
         to="/"
         exact
        >
      <button onClick={handleLogout}>Logout</button>
      </NavLink>
    </header>

)}



export default Logout;




 