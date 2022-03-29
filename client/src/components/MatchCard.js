import { useState, useEffect } from 'react';

function MatchCard({ user, match, profiles, setMatches, matches }){

    

    let filteredProfiles = []

    if (user){
        filteredProfiles = profiles.filter((p) => p.id !== user.id )
    }

    const myMatchArray = filteredProfiles.filter((p) => p.id===match.like.user_id || p.id===match.like.liked_person_id)
    const myMatch = myMatchArray[0]
    


    return(
        <div id="match_card">
            {myMatch ?
            <div>
            <h3>You matched with: {myMatch.name}!</h3>
            <h3>Age: {myMatch.age}</h3>
            <img id="profile_photo" width="200px" src={myMatch.photo}></img>
            </div> : <h3>No Matches yet!</h3>
            }
        </div>
    )
}

export default MatchCard;