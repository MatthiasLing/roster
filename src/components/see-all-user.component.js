import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid';

// import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ReactList from 'react-list';


// imports:
// react-list
// npm install semantic-ui-react semantic-ui-css
//npm install @material-ui/core

const axios = require('axios');

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  async function getAll() {
    const res = await axios.get('http://localhost:4000/roster');
    // var allUsers = JSON.parse(res.data);
    setUsers(res.data)
    console.log(res.data)
  }

  function renderItem(index, key) {
    return (<div key={key} style={{ color: "black" }}>
      <div class="ui animated button" style={{ width: "400px", height: "70px", backgroundColor: "#DCDCDC", margin: "2px" }}>
        <div style={{ color: "#778899" }}>{users[index].username}</div>
        <div style={{ margin: "2px" }}>{users[index].email}</div>
      </div>
    </div>);
  }

  return (
    <div className="container">
      <Grid container spacing={2}>
       
        <Grid container justify="center" spacing={2} style={{ margin: " 30px" }}>

          <div style={{ overflow: 'auto', maxHeight: 600 }}>
            <ReactList
              itemRenderer={renderItem}
              length={users.length}
              type='uniform'
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2} style={{}}>
            <button class="ui secondary button" onClick={() => { getAll() }}
              style={{ width: "300px", height: "60px" }}>
              Get All Records
          </button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}