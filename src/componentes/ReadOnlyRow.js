import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
        <td>{contact.Name}</td>
        <td>{contact.Address}</td>
        <td>{contact.Mobile}</td>
        <td>{contact.Email}</td>
        <td>
            <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
            <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
        </td>
      </tr>
    )
}

export default ReadOnlyRow
