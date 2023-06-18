import React, { useState, useEffect } from 'react'
import ContactItem from "../contact-item/ContactItem";
import './Contact.css';
import {Link} from "react-router-dom";

export default function ContactList() {

    const  API_URL = "https://random-data-api.com/api/v2/users?size=20";

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
    fetch(API_URL)
        .then(data => data.json())
        .then(data => setContacts(data));
    }, []);



    const items = contacts.map(contact => {
        const newUrl ="contact/" +contact.id
        return (
            <li key={contact.uid}>{contact.first_name} {contact.last_name} {contact.gender}
                <Link to={newUrl}>
                    <ContactItem contactData = {contact}/>
                </Link>
            </li>);
    });

    if (contacts.length > 0) {
        return (
            <div>
                <ul className={'ul'}>
                    {items}
                </ul>
            </div>
        )
    }

    else {
        return <p>The contact list are being fetched...</p>
    }
}
