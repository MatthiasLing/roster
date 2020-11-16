import React, {Component, useState} from 'react'

const axios = require('axios');


export default function CreateUser (props){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    function onChangedUsername(name){
        setUsername(name.target.value);
    }

    function onChangedEmail(email){
        setEmail(email.target.value);
    }

    function onSubmit(e){
        console.log(username, email)

        e.preventDefault();

        var params = { username: username, email: email };

        const res = axios.post('http://localhost:4000/roster/add', {
          params: params
        }).then((msg) => {
          console.log(msg);
          setUsername('');
          setEmail('');
          console.log("User created!");
        });
    }

    return(
        <div style = {{marginTop: 20}}>
            <h3>Create New User</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label>Username: </label>
                    <input type = "text"
                        className = "form-control"
                        value ={username}
                        onChange = {onChangedUsername}></input>
                </div>

                <div className = "form-group">
                    <label>Email: </label>
                    <input type = "text"
                        className = "form-control"
                        value ={email}
                        onChange = {onChangedEmail}></input>
                </div>

                <div className= "form-group">
                    <input type = "submit" value = "Create" className = "btn btn-primary"></input>
                </div>
            </form>
      </div>
        
    )
}