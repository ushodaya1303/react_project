
import React from "react";
import './index.css'
import Typography from '@mui/material/Typography'



class  Addcontact extends React.Component{
     state={
        name:"",
        email:""
    };
 add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("please enter valid detials");
            return;
        }
       this.props.addContactListener(this.state);
       this.setState({name:"",email:""});
    };
    render(){
    return(
        <div style={{textAlign: "center"}}>
            <Typography variant="h6">Contact </Typography>
        <form onSubmit={this.add}>
            <label className="formdesign">Name</label>
            <br></br>
            <input  type="text" placeholder="Enter your name"  value={this.state.name} onChange={(e)=>this.setState({name :e.target.value})}/>
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