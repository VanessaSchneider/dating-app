import { useState, useEffect } from 'react';

function MatchCard({ user, match, profiles, setMatches, matches, setProfiles }){
    const [unmatchButton, setUnmatchButton] = useState(true)

    useEffect(() => {
        fetch("/users")
      .then((res) => res.json())
      .then((data) => setProfiles(data))}, 
      [])

    let filteredProfiles = []

    //Removes current user from array of users
    if (user){
        filteredProfiles = profiles&&profiles.filter((p) => p.id !== user.id )
    }

    //Removes profiles from list of users that do not correspond with the match data
    const myMatchArray = filteredProfiles&&filteredProfiles.filter((p) => p.id===match.like.user_id || p.id===match.like.liked_person_id)
    //Extracts the first (and only) element from the array returned by myMatchArray
    const myMatch = myMatchArray&&myMatchArray[0]
    
    function handleUnmatch(){
            fetch(`/matches/${match.id}`, {
              method: "DELETE",
            }).then(() => setUnmatchButton(true))
            .then(() =>{
                const newMatchList = matches.filter((m) => m.id !== match.id)
                 setMatches(newMatchList)})
    }

    return(
        <div id="match_card">
            {myMatch ?
            <div>
            <h3>You matched with: {myMatch.name}!</h3>
            <h3>Age: {myMatch.age}</h3>
            <img id="profile_photo" width="200px" src={myMatch.photo}></img>
            {unmatchButton ? <button onClick={() => setUnmatchButton(false)}>Unmatch</button> : null}
            {unmatchButton ? null : <button onClick={() => handleUnmatch()}>Confirm Unmatch?</button>}
            </div> : null
            }
        </div>
    )
}

export default MatchCard;