import { useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Matches({ user, setUser, matches, setMatches }) {

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  let match_display = []
  let numberOfMatches = null

  if (matches && user){
    match_display = (matches ? matches.filter((m) => m.like.liked_person_id === user.id) : null)
    numberOfMatches = user.matches.length + match_display.length
  }

    return(
        <div>
            <h2>This is your Matches Page</h2>
            {user && numberOfMatches > 0 ? <p>You have {numberOfMatches} match(es). Subscribe to premium to view matches.</p> : null}
        </div>
    )
}

export default Matches;