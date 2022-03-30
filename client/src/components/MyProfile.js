import { useState, useEffect } from 'react';

function MyProfile({ user, handleDeleteProfile, setUser }){

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data));
          }
        });
      }, []);
    

    return(
        <div>
            {user ?
        <div id="my_profile_card">
            <h1>My Profile</h1>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <img width="200px" src={user.photo}/>
            <button onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
         : null }
        </div>
    )
}

export default MyProfile;