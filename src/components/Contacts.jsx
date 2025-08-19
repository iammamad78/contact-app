import React, { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/Inputs";
import { v4 } from "uuid";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    console.log(newContact);

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };

  const deleteHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            onChange={changeHandler}
            value={contact[input.name]}
          />
        ))}

        <button onClick={addHandler}>Add contact</button>
      </div>
      <div className="text-red-500">{alert && <p>{alert}</p>}</div>

      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default Contacts;
