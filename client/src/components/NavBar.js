
import { NavLink } from "react-router-dom";


function NavBar ({ user, matches }){

    return (
        <div id="nav">
        {user ? <div>
        <NavLink
         to="/"
         exact
        >
            <button>Home Page</button>
        </NavLink>
        <NavLink
        to="/matches" 
        exact
        >
            <button>Matches ({matches.length})</button>
        </NavLink>
        <NavLink
            to="/myProfile"
            exact>
                <button>My Profile</button>
            </NavLink>
        </div> : null }
        </div>
    )
}

export default NavBar;