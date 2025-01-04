import React from "react";
import { messages } from "../data";

function Messages() {
  return (
    <div>
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            {/* <li className="message sent">
              <div className="icon">E</div>
              <span className="content">One</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">Two</span>
            </li>
            <li className="message sent">
              <div className="icon">E</div>
              <span className="content">Three four five</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">🎺🎺🎺🎺🎺</span>
            </li> */}
            {messages.map((message) => (
              <li className={`message ${message.type}`} key={message.id}>
                <div className="icon">{message.name.charAt(0)}</div>
                <span className="content">{message.content}</span>
              </li>
            ))}
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}
export default Messages;
