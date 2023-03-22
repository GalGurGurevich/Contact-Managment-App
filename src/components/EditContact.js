import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveContact, setSelectedContact } from '../redux/store'
import Alert from '@mui/material/Alert';
import { validatePhone } from '../utils/helperFunctions'
import './EditContact.css'

export default function EditContact({ contact }) {

    const [name, setName] = useState(contact?.name || "");
    const [address, setAddress] = useState(contact?.address || "")
    const [phone, setPhone] = useState(contact?.phone || "");
    const [title, setTitle] = useState(contact?.title || "");
    const dispatch = useDispatch();
    const enableSave = (phone && validatePhone(phone));

    function addContact() {

        dispatch(saveContact({
            id: contact?.id || null,
            name: name,
            address: address,
            phone: phone,
            title: title,
            img: contact.img || null,
            job: contact.job,
            city: contact.city,
            location: contact.location
        }))
        
        dispatch(setSelectedContact(null))
    }



    return (
        <div className="edit-contact-container">
            <div className="edit-contact-input-field">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="edit-contact-input-field">
                <label>address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="edit-contact-input-field">
                <label>title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="edit-contact-input-field">
                <label>phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <button onClick={() => addContact()} disabled={!enableSave}>SAVE</button>
            {!enableSave && <Alert severity="error">Mobile must be numbers only, no spaces, no characters</Alert>}
        </div>
    )
}
