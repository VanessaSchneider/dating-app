import { useState, useEffect } from 'react';

function MyProfile({ user, handleDeleteProfile, setUser }){
    const [deleteButton, setDeleteButton] = useState(true)

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data));
          }
        });
      }, []);

      function deleteProfileHandler(){
        setDeleteButton(true)
        handleDeleteProfile()
        alert("Profile has been Deleted")
      }
    

    return(
        <div>
            {user ?
        <div id="my_profile_card">
            <h1>My Profile</h1>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Location: {user.location}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Bio: {user.bio}</h3>
            <img width="200px" src={user.photo}/>
            { deleteButton ? null : <button onClick={()=>deleteProfileHandler()}> Confirm Delete Profile? </button>}
            { deleteButton? <button onClick={()=>setDeleteButton(false)}>Delete Profile</button> : null }
        </div>
         : null }
        </div>
    )
}

export default MyProfile;