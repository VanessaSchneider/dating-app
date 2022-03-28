
import { useState } from "react";

function Profile( { currentProfile, user }){

    let randomProfile = currentProfile[Math.floor(Math.random() * currentProfile.length)];

    //TODO Logic to remove "disliked and liked profiles" from list of diplayed items
    // 

    function likeProfile(rp){
        let likeData = {
            liked_person_id: rp.id, user_id: user.id
        }
            fetch("/likeProfile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(likeData),
            })
              .then((r) => r.json())
              .then((data)=>console.log(data))
            //  TODO "fetch matches? skip to next profile"
    }

    function dislikeProfile(){
        console.log("dislike!")

        // "/dislikedProfile"
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
            <button onClick={()=>dislikeProfile()}>Dislike</button>
        </div>
    )
}

export default Profile;