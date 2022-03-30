import { useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import MatchCard from "./MatchCard";

function Matches({ user, setUser, matches, setMatches, profiles, setProfiles }) {

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/getMatches")
.then((res) => res.json())
.then((data) => setMatches(data))}, 
[])

  let matchCards = []
  
  if (matches.length !== 0 && user){
  matchCards = matches.map((m) => <MatchCard setProfiles={setProfiles} setMatches={setMatches} matches={matches} user={user} profiles={profiles} key={m.id} match={m}/>)
  }
 

    return(
        <div >
            <h2>This is your Matches Page</h2>
            {user && matches ? <h3>You have {matches.length} match(es).</h3> : null}
            {matchCards}
        </div>
    )
}

export default Matches;