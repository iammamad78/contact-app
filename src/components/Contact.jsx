import React from "react";

function Contact() {
  return (
    <form className="bg-red-100 ">
      <input placeholder="Name" type="text" name="name" id="" />
      <input placeholder="Last Name" type="text" name="lastName" id="" />
      <input placeholder="Email" type="text" name="email" id="" />
      <input placeholder="Phone" type="number" name="phone" id="" />
    </form>
  );
}

export default Contact;
