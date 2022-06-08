import React from "react";
const CardList=(props)=>{
    const {name,email}=props.contact;
    return(
        <div>
    <div>{name}</div>
    <div>{email}</div>
    </div>
    );
}
export default CardList;