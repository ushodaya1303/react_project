import React from "react";
import CardList from "./CardContent";
const contactList=(props)=>{
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <CardList contact={contact}/>
        );
    
    }
    )
    return(<div>{renderContactList}</div>);
}
export default contactList;