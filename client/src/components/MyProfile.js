import {
  useState,
  useEffect
} from 'react';

function MyProfile({
  user,
  handleDeleteProfile,
  setUser
}) {
  const [deleteButton, setDeleteButton] = useState(true)
  const [edit, setEdit] = useState(false)
  const [username, setUsername] = useState(user && user.username);
  const [name, setName] = useState(user && user.name)
  const [age, setAge] = useState(user && user.age)
  const [location, setLocation] = useState(user && user.location)
  const [photo, setPhoto] = useState(user && user.photo)
  const [bio, setBio] = useState(user && user.bio)


  function fetchUser() {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
    if (user) {
      setUsername(user.username)
      setName(user.name)
      setAge(user.age)
      setLocation(user.location)
      setPhoto(user.photo)
      setBio(user.bio)
    }
  }

  function refreshFetch() {
    fetchUser()
    setEdit(!edit)
  }

  useEffect(() => {
    fetchUser()
  }, []);

  function deleteProfileHandler() {
    setDeleteButton(true)
    handleDeleteProfile()
    alert("Profile has been Deleted")
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          age,
          location,
          photo,
          bio
        }),
      })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          data.errors.forEach(e => e === "Age must be greater than or equal to 18" ? alert("Must be 18 or older") : alert(e))
        } else {
          setEdit(false);
          setUsername('')
          setName("")
          setAge("")
          setLocation("")
          setPhoto("")
          setBio("")
          alert("Profile Successfully Updated!")
          fetchUser();

        }
      })
  }


  const editBox = ( <
    div className = "clear" >
    <
    form onSubmit = {
      (e) => handleEdit(e)
    } >
    <
    div className = "mb-3" >
    <
    label > Username < /label> <
    br > < /br> <
    input type = "text"
    value = {
      username
    }
    onChange = {
      (e) => setUsername(e.target.value)
    }
    placeholder = "username" / >
    <
    /div> <
    label > Name < /label> <
    br > < /br> <
    div className = "mb-3" >
    <
    input type = "text"
    value = {
      name
    }
    onChange = {
      (e) => setName(e.target.value)
    }
    placeholder = "name" / >
    <
    /div> <
    label > Age < /label> <
    br > < /br> <
    div className = "mb-3" >
    <
    input type = "text"
    value = {
      age
    }
    onChange = {
      (e) => setAge(e.target.value)
    }
    placeholder = "age" / >
    <
    /div> <
    label > Location < /label> <
    br > < /br> <
    div className = "mb-3" >
    <
    input type = "text"
    value = {
      location
    }
    onChange = {
      (e) => setLocation(e.target.value)
    }
    placeholder = "location" / >
    <
    /div> <
    label > Photo < /label> <
    br > < /br> <
    div className = "mb-3" >
    <
    input type = "text"
    value = {
      photo
    }
    onChange = {
      (e) => setPhoto(e.target.value)
    }
    placeholder = "photo" / >
    <
    /div> <
    label > Bio < /label> <
    br > < /br> <
    div className = "mb-3" >
    <
    input type = "text"
    value = {
      bio
    }
    onChange = {
      (e) => setBio(e.target.value)
    }
    placeholder = "bio" / >
    <
    /div> <
    div className = "mb-3" >
    <
    input type = "submit"
    className = "btn btn-outline-light" > < /input> <
    /div>

    <
    /form> <
    /div>
  )


  return ( <
      div className = "clear" >
      <
      div className = "position-absolute top-50 start-50 translate-middle" > {
        user && !edit ?
        <
        div className = "card"
        style = {
          {
            width: "20rem"
          }
        } >
        <
        div className = "card-header" > < h3 > My Profile < /h3></div >
        <
        img alt = ""
        style = {
          {
            width: "10rem"
          }
        }
        src = {
          user.photo
        }
        /> <
        ul className = "list-group list-group-flush" >
        <
        h4 className = "list-group-item" > Name : {
          user.name
        } < /h4> <
        h4 className = "list-group-item" > Age: {
          user.age
        } < /h4> <
        h4 className = "list-group-item" > Location: {
          user.location
        } < /h4> <
        h4 className = "list-group-item" > Email: {
          user.email
        } < /h4> <
        h4 className = "list-group-item" > Bio: {
          user.bio
        } < /h4>

        <
        /ul>

        {
          deleteButton ? null : < button type = "button"
          className = "btn btn-outline-danger"
          style = {
            {
              width: "10rem"
            }
          }
          onClick = {
              () => deleteProfileHandler()
            } > Confirm Delete Profile ? < /button>} {
              deleteButton ? < button className = "btn btn-outline-danger"
              style = {
                {
                  width: "10rem"
                }
              }
              onClick = {
                  () => setDeleteButton(false)
                } > Delete Profile < /button> : null } <
                /div>: null
            } {
              edit ? editBox : null
            } <
            button className = "btn btn-outline-secondary"
          onClick = {
              () => refreshFetch()
            } > {
              edit ? "Cancel Edit" : "Edit Profile"
            } < /button> <
            /div> <
            /div>
        )
      }

      export default MyProfile;