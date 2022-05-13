function Profile( { currentProfile, user, profiles, setProfiles, handleDeleteUser, getMatches }){

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
              .then(() => getMatches())
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
    const noMoreProfiles = <h4>Nobody left to swipe!</h4>
    // TODO add BIO and rest of attr section after Age. 
    return(
     
      <div>
      <div id="profileCard" className="card" style={{width: "18rem"}}>
        <img alt="" className="card-img-top" src={randomProfile&&randomProfile.photo}></img>
        <div className="card-text-center">
            <h2>{randomProfile ? 
            <div className ="card-text-center">
            <h4 className="card-text-center2">{randomProfile.name}</h4>
            <h5 className="card-text-center">{randomProfile.age}</h5>
            <h6 className="card-text-center">{randomProfile.location}</h6>
            <h6 className="card-text-center2">{randomProfile.bio}</h6>
            </div>
            : null}
            </h2>
            {currentProfile.length === 0 ? null : <div className = "card-text-center3">
            <button type="button" className="btn btn-outline-secondary" onClick={()=>dislikeProfile(randomProfile)}>Dislike</button>
            <button type="button" className="btn btn-outline-success" onClick={()=>likeProfile(randomProfile)}>Like</button>
            </div>}
            {currentProfile.length === 0 ? noMoreProfiles : null}
        </div>
        </div>
        </div>
       
    )
}

export default Profile;