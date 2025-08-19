import React from "react";

function ContactItem({
  contact: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)} className="cursor-pointer">
        🗑️
      </button>
    </li>
  );
}

export default ContactItem;
