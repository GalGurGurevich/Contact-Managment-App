import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveContact, setSelectedContact } from './store'
import './EditContact.css'

export default function EditContact({ contact }) {
    console.log("EditContact", contact);
    const [name, setName] = useState(contact?.name || "");
    const [address, setAddress] = useState(contact?.address || "")
    const [phone, setPhone] = useState(contact?.phone || "");
    const [title, setTitle] = useState(contact?.title || "");
    const dispatch = useDispatch();

    useEffect(() => {
        setName(contact?.name || "")
        setAddress(contact?.address || "")
        setPhone(contact?.phone || 0)
        setTitle(contact?.title || "")
    },[contact])

    function addContact() {
        if(!validatePhone(phone)) {
            return;
        }

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
        
        resetState();
    }

    function resetState() {
        setName("")
        setAddress("")
        setPhone(0)
        dispatch(setSelectedContact(null))
    }

    function validatePhone(num) {
        const regexPattern = /^[\d()+]*$/; // number, (), +

        if(!num) return false;
        if (regexPattern.test(num)) {
            console.log("The input string is valid.");
            return true
        } else {
            console.log("The input string is not valid.");
            return false;
        }
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
            <button onClick={() => addContact()}>SAVE</button>
        </div>
    )
}
