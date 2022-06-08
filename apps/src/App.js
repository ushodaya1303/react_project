import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Addcontact from './addcontact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);

  const addContactListener=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }
  // useEffect(()=>{
  //   const retriewContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriewContacts) {setContacts(retriewContacts)};
  // },[]
  // );

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]
  );
  

  return (
    <div>
      <Router>
      <Header/>
      <Route path="/add" component={Addcontact}/>
      {/* // <Addcontact addContactListener={addContactListener}/> */}
      <ContactList contacts={contacts}/>
      </Router>
      </div>
  );
}

export default App;
