import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter Name.." name="Name" value={editFormData.Name} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Address.." name="Address" value={editFormData.Address}  onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Mobile.." name="Mobile" value={editFormData.Mobile} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="email" required="required" placeholder="Enter Email.." name="Email" value={editFormData.Email} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="submit" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow