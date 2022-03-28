
import { useState } from "react";

function Profile( { currentProfile, user, profiles, setProfiles }){

    let randomProfile = currentProfile[Math.floor(Math.random() * currentProfile.length)];

    //TODO Logic to remove "disliked and liked profiles" from list of diplayed items
    // 

    function likeProfile(rp){
        let ui = user.id
        let rpid = rp.id
       
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
        console.log("dislike!")
        let ui = user.id
        let rpid = rp.id
       
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
   
    // TODO add BIO and rest of attr section after Age. 
    return(
        <div id="profile_card">
            <h2>{randomProfile ? 
            <div>
            <p>{randomProfile.name}</p>
            <p>{randomProfile.age}</p>
            
            </div>
            
            : null}</h2>
            <button onClick={()=>likeProfile(randomProfile)}>Like</button>
            <button onClick={()=>dislikeProfile(randomProfile)}>Dislike</button>
        </div>
    )
}

export default Profile;