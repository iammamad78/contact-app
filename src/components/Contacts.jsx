import React, { useState } from "react";
import ContactList from "./ContactList";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState({
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
    setContacts((prevContacts) => [...prevContacts, contact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };

  return (
    <div>
      <div>
        <input
          onChange={changeHandler}
          value={contact.name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={changeHandler}
          value={contact.lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={changeHandler}
          value={contact.email}
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={changeHandler}
          value={contact.phone}
          name="phone"
          type="number"
          placeholder="Phone"
        />

        <button onClick={addHandler}>Add contact</button>
      </div>
      <div className="text-red-500">{alert && <p>{alert}</p>}</div>

      <ContactList />
    </div>
  );
}

export default Contacts;
