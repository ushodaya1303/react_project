
import React from "react";
import './index.css'
import Typography from '@mui/material/Typography'
var axios = require('axios');


class  Addcontact extends React.Component{
     state={
        password:"",
        email:""
    };

 add=(e)=>{
        e.preventDefault();
        if(this.state.password==="" || this.state.email===""){
            alert("please enter valid details");
            return;
        }
       this.props.addContactListener(this.state);

     var data = JSON.stringify({
         "email": this.state.email,
         "password": this.state.password
     });


     var config = {
         method: 'post',
         url: 'https://cfg22-backend.herokuapp.com/api/v1/auth/login',
         headers: {
             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTMwMmIxM2FkZjIxNzA0MzE1MDg0OCIsImlhdCI6MTY1NDg1MDczNywiZXhwIjoxNjU3NDQyNzM3fQ.Q2dxz6pXV308HG7Br94KzbxEHYpaCqZy2MQBv6gHS0M',
             'Content-Type': 'application/json',
             // 'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTMwMmIxM2FkZjIxNzA0MzE1MDg0OCIsImlhdCI6MTY1NDg1MDczNywiZXhwIjoxNjU3NDQyNzM3fQ.Q2dxz6pXV308HG7Br94KzbxEHYpaCqZy2MQBv6gHS0M',
             'Access-Control-Allow-Origin' : '*'
         },
         data : data
     };

     console.log("1");
     console.log(data);
     axios(config)
         .then(function (response) {
             console.log("2");
             console.log(JSON.stringify(response.data));
         })
         .catch(function (error) {
             console.log("3");
             console.log(error);
         });

     this.setState({password:"",email:""});

    };
    render(){
    return(
        <div style={{textAlign: "center"}}>
            <Typography variant="h6">Contact </Typography>
        <form onSubmit={this.add}>
            <label className="formdesign">Password</label>
            <br></br>
            <input  type="text" placeholder="Enter password"  value={this.state.password} onChange={(e)=>this.setState({password :e.target.value})}/>
            <br></br>
            <label className="formdesign">Email</label>
            <br></br>
            <input type="text" placeholder="Enter your email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            <br></br>
            <button type="submit">Add</button>
        </form>
        </div>
    )
    }
}
export default Addcontact;