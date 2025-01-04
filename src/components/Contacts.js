import React from "react";
import { contacts } from "../data";

function Contacts() {
  return (
    <div>
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {/* <li className="contact">
            <div className="icon">A</div>
            Angela
          </li>
          <li className="contact active">
            <div className="icon">P</div>
            Pamela
          </li>
          <li className="contact">
            <div className="icon">S</div>
            Sandra
          </li>
          <li className="contact">
            <div className="icon">R</div>
            Rita
          </li> */}
          {contacts.map((contact) => (
            <li className="contact" key={contact.id}>
              <div className="icon">{contact.name.charAt(0)}</div>
              {contact.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Contacts;
