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
    <div className="container mx-auto">
      <div className="bg-white p-10 rounded-3xl shadow-md shadow-blue-100 m-8 flex flex-wrap gap-4 items-center justify-center">
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            onChange={changeHandler}
            value={contact[input.name]}
            className="w-80  outline-none border-gray-300 border-2 p-3 rounded-lg focus:border-blue-400 transition"
          />
        ))}

        <button
          onClick={addHandler}
          className="w-80 md:w-165 bg-blue-600 rounded-lg text-white p-3 hover:bg-blue-700 transition"
        >
          Add contact
        </button>
      </div>
      <div className={"text-red-500 bg-red-200 rounded-lg text-center"}>
        {alert && <p>{alert}</p>}
      </div>

      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
