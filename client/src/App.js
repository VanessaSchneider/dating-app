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
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function login (username, password){
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => (user.username ? setUser(user) : null));
  }

  function handleDeleteUser(id){
    const updatedUsers =profiles.filter(p=>p.id!==id)
    setProfiles(updatedUsers)
  }
  
const welcome = (user ? `Welcome ${user.name}` : "Login to Start Swiping")

  return (
    
    <div className="App">
      <NavBar user={user}/>
      {user ? null : <Signup onLogin={setUser} login={login} /> }
      <nav className="nav-container">
        {user ? <Logout onLogout={setUser}/> : <Login onLogin={setUser}/> }
       </nav> 
      <h1>{welcome}</h1>


      <Switch>
      <Route exact path="/">
      {user ? <SwipePage setUser={setUser} handleDeleteUser={handleDeleteUser} profiles={profiles} setProfiles={setProfiles} user={user}/> : null}
      </Route>
      <Route exact path="/matches">
      <Matches />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
