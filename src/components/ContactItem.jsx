import React from "react";

function ContactItem({
  contact: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li
      key={id}
      className="bg-gray-200 py-4 px-8 rounded-3xl flex flex-nowrap gap-4 items-center justify-between"
    >
      <p className="font-semibold text-base p-2 ">
        {name} {lastName}
      </p>
      <p className="font-semibold text-base p-2 ">
        <span className="w-4">📧</span>
        {email}
      </p>
      <p className="font-semibold text-base p-2 ">
        <span className="w-4">📞</span>
        {phone}
      </p>
      <button
        onClick={() => deleteHandler(id)}
        className="cursor-pointer rounded-lg  p-2 hover:bg-red-600 transition"
      >
        🗑️
      </button>
    </li>
  );
}

export default ContactItem;
