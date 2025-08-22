import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler }) {
  return (
    <div className="mt-10">
      <h3 className="text-lg text-blue-600">Contacts List</h3>
      {contacts.length ? (
        <ul className="flex flex-col gap-4 bg-white mt-10">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No Contact Yet</p>
      )}
    </div>
  );
}

export default ContactList;
