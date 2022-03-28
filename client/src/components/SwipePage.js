import React from "react";
import Profile from "./Profile";
import { useEffect, useState } from "react";

function SwipePage({ profiles, setProfiles, user }){

    let filteredProfiles = profiles.filter((p) => p.id !== user.id )

    let currentProfile = filteredProfiles.filter((p) => p.likes.user_id != user.id)
    
    console.log("userID", user.id)
    console.log("user Likes", user.likes)
    console.log("currentProfile", currentProfile)

    useEffect(() => {
        fetch("/users")
    .then((res) => res.json())
    .then((data) => setProfiles(data))}, 
    [])

    return(
        <div>
            <h1>
                Welcome to the Swipe Page
            </h1>
            <div >
                <Profile currentProfile={currentProfile} user={user} profiles={profiles} setProfiles={setProfiles}/>
            </div>
        </div>
    )
}

export default SwipePage;