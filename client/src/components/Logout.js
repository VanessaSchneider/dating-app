
// import { NavLink, useHistory } from "react-router-dom";

function Logout ({ onLogout }){
// const history = useHistory();

// const handleRedirect = () => {
//   history.push("/")
// }


function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
        }).then(() => onLogout());
      }

return(
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>

)}



export default Logout;




 