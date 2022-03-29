import Login from './components/Login.js'
import { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Logout from './components/Logout.js';
import SwipePage from './components/SwipePage.js';
import NavBar from './components/NavBar.js';
import Matches from './components/Matches.js';
import { Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState(null);
  const [matches, setMatches] = useState([])
  
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users")
  .then((res) => res.json())
  .then((data) => setProfiles(data))}, 
  [])

  //   useEffect(() => {
  //     fetch("/getMatches")
  // .then((res) => res.json())
  // .then((data) => setMatches(data))}, 
  // [])

  function login (username, password){
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((data) => (user.username ? setUser(data) : null));
  }

  function handleDeleteUser(id){
    const updatedUsers =profiles.filter(p=>p.id!==id)
    setProfiles(updatedUsers)
  }

 
  
const welcome = (user ? `Welcome ${user.name}` : "Login to Start Swiping")

  return (
    
    <div className="App">
      <NavBar user={user}/>
      


      <Switch>
      <Route exact path="/">
      {user ? null : <Signup onLogin={setUser} login={login} /> }
      <nav className="nav-container">
        {user ? <Logout onLogout={setUser}/> : <Login onLogin={setUser}/> }
       </nav> 
      <h1>{welcome}</h1>
      {(user && profiles) ? <SwipePage setUser={setUser} handleDeleteUser={handleDeleteUser} profiles={profiles} setProfiles={setProfiles} user={user}/> : null}
      </Route>
      <Route exact path="/matches">
      <Matches matches={matches} setMatches={setMatches} user={user} setUser={setUser} profiles={profiles} setProfiles={setProfiles}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
