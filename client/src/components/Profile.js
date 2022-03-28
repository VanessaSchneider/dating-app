
import { useState } from "react";

function Profile( { currentProfile, user, profiles, setProfiles, handleDeleteUser }){

    let randomProfile = currentProfile[Math.floor(Math.random() * currentProfile.length)];

    //TODO Logic to remove "disliked and liked profiles" from list of diplayed items
    // 

    function likeProfile(rp){
        let ui = user.id
        let rpid = rp.id
       handleDeleteUser(rpid)
            fetch("/likeProfile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify( 
                  {
                      "user_id": ui, 
                      "liked_person_id": rpid 
                }),
            })
              .then((r) => r.json())
              .then((data)=>console.log(data))
            //  TODO "fetch matches? skip to next profile"
    }

    function dislikeProfile(rp){
        let ui = user.id
        let rpid = rp.id
        handleDeleteUser(rpid)
            fetch("/dislikedProfile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify( 
                  {
                      "user_id": ui, 
                      "disliked_person_id": rpid 
                }),
            })
              .then((r) => r.json())
              .then((data)=>console.log(data))
        
    }
    const noMoreProfiles = <h1>Nobody left to swipe!</h1>
    // TODO add BIO and rest of attr section after Age. 
    return(
        <div id="profile_card">
            <h2>{randomProfile ? 
            <div>
            <p>{randomProfile.name}</p>
            <p>{randomProfile.age}</p>
            </div>
            : null}
            </h2>
            {noMoreProfiles.length === 0 ? null : <div>
            <button onClick={()=>likeProfile(randomProfile)}>Like</button>
            <button onClick={()=>dislikeProfile(randomProfile)}>Dislike</button>
            </div>}
            {currentProfile.length === 0 ? noMoreProfiles : null}
        </div>
    )
}

export default Profile;