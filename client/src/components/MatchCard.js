import { useState, useEffect } from 'react';

function MatchCard({ user, match, profiles, setMatches, matches, setProfiles }){
    const [unmatchButton, setUnmatchButton] = useState(true)
    const [message, setMessage] = useState("")
    const [openMessage, setOpenMessage]=useState(false)
    const [messageList, setMessageList]=useState(match.messages)

    console.log(messageList)

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
                 setMatches(newMatchList)
                 alert("You have unmatched") 
                })
            }

            function handleMessage(e){
                e.preventDefault();
                fetch("/messages", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "conversation_id": match.conversations[0].id,
                        "message": message,
                        "user_id": user.id
                    }),
                  })
                    .then((r) => r.json())
                    .then((data)=> setMessageList([...messageList, data]))
                    setMessage('')
                }

                const messageBox = (
                    <div>
                        <form onSubmit={(e)=>handleMessage(e)}>
                            <input type ="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your chat here"/>
                            <input type = "submit"></input>
                        </form>
                    </div>
                  )

                  const messageDisplay = messageList.map((m)=> <p key={m.id}>{m.user_id === user.id ? "me" : myMatch&&myMatch.name}: {m.message}</p>)

    return(
        <div id="match_card">
            {myMatch ?
            <div>
            <h3>You matched with: {myMatch.name}!</h3>
            <h3>Age: {myMatch.age}</h3>
            <img id="profile_photo" width="200px" src={myMatch.photo}></img>
            {/* {match.messages? messageDisplay : <p>Start a conversation!</p>} */}
            {match.messages.length === 0 ? <p>No messages yet! Start a conversation!</p> : null}
            {openMessage ? messageDisplay : null}
            {openMessage ? messageBox : null}
            <button onClick={()=>setOpenMessage(!openMessage)}>{openMessage ? "Close Messages" : "Open Messages"}</button>
            {unmatchButton ? <button onClick={() => setUnmatchButton(false)}>Unmatch</button> : null}
            {unmatchButton ? null : <button onClick={() => handleUnmatch()}>Confirm Unmatch?</button>}
            </div> : null
            }
            
        </div>
    )
}

export default MatchCard;