
import React, { useState, Fragment} from 'react';
import './App.css';
import data from './data.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './componentes/ReadOnlyRow';
import EditableRow from './componentes/EditableRow';

const App =() => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setaddFormData] = useState({
    Name:"",
    Address: "",
    Mobile:"",
    Email: ""
  });
  const [editFormData, setEditFormData] = useState({
    Name:"",
    Address: "",
    Mobile:"",
    Email: ""
  });
  const[editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setaddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newConatact = {
      id: nanoid(),
      Name: addFormData.Name,
      Address: addFormData.Address,
      Mobile: addFormData.Mobile,
      Email: addFormData.Email
    };

    const newConatacts = [...contacts, newConatact];
    setContacts(newConatacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedConatact = {
      id: editContactId,
      Name: editFormData.Name,
      Address: editFormData.Address,
      Mobile: editFormData.Mobile,
      Email: editFormData.Email
    };

    const newConatacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newConatacts[index] = editedConatact;
    setContacts(newConatacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Address: contact.Address,
      Mobile: contact.Mobile,
      Email: contact.Email
    }
    setEditFormData(formValues);
  };
  
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newConatacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newConatacts.splice(index, 1);
    setContacts(newConatacts);
  };

  return (
    <div className="app-conatainer">
    <form onSubmit={ handleEditFormSubmit }>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact)=> (
          <Fragment>
            {editContactId === contact.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>) 
            : (<ReadOnlyRow contact = { contact } handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}
          </Fragment>
        ))}
      </tbody>
    </table>
    </form>
    <h2>Add User</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="Name" required="required" placeholder="Enter Name" onChange={handleAddFormChange}/>
      <input type="text" name="Address" required="required" placeholder="Enter Address" onChange={handleAddFormChange}/>
      <input type="text" name="Mobile" required="required" placeholder="Enter Mobile Number" onChange={handleAddFormChange}/>
      <input type="email" name="Email" required="required" placeholder="Enter Email" onChange={handleAddFormChange}/>
      <button type="submit">Add</button>
    </form>
  </div>
  );
};
    
export default App;
