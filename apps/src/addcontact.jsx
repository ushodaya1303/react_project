
import React from "react";


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
        <div>
        <h2>contact</h2>
        <form onSubmit={this.add}>
            <label>name</label>
            <br></br>
            <input type="text" placeholder="enter your name"  value={this.state.name} onChange={(e)=>this.setState({name :e.target.value})}/>
            <br></br>
            <label>email</label>
            <br></br>
            <input type="text" placeholder="enter your email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            <br></br>
            <button type="submit">Add</button>
        </form>
        </div>
    )
    }
}
export default Addcontact;