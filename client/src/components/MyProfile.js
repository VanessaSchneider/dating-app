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
        <div className="position-absolute top-50 start-50 translate-middle">
            {user ?
        <div className="card" style={{width: "20rem"}}>
            <div className="card-header"><h3>My Profile</h3></div>
            <img style={{width: "10rem"}} src={user.photo}/>
            <ul className="list-group list-group-flush">
            <h4 className="list-group-item">Name: {user.name}</h4>
            <h4 className="list-group-item">Age: {user.age}</h4>
            <h4 className="list-group-item">Location: {user.location}</h4>
            <h4 className="list-group-item">Email: {user.email}</h4>
            <h4 className="list-group-item">Bio: {user.bio}</h4>
            </ul>
            
            { deleteButton ? null : <button type="button" className="btn btn-outline-danger" style={{width: "10rem"}} onClick={()=>deleteProfileHandler()}> Confirm Delete Profile? </button>}
            { deleteButton? <button className="btn btn-outline-secondary" style={{width: "10rem"}}onClick={()=>setDeleteButton(false)}>Delete Profile</button> : null }
        </div>
         : null }
        </div>
    )
}

export default MyProfile;