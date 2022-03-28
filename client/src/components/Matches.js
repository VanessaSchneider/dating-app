import { useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Matches({ user, setUser }) {

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);



    //   if matches.like has my id
  
    return(
        <div>
            <h2>This is your Matches Page</h2>
            {user && user.matches.length > 0 ? <p>You have matches</p> : null}
        </div>
    )
}

export default Matches;