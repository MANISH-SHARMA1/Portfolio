import React, { useRef, useState } from "react";
import "./Message.scss";
import Card from "../card/Card";

function Message() {
  const fname = useRef(null);
  const lname = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const firstName = fname.current.value;
    const lastName = lname.current.value;
    const phn = phone.current.value;
    const mail = email.current.value;
    const msg = message.current.value;

    const curData = {
      fname: firstName,
      lname: lastName,
      phone: phn,
      email: mail,
      message: msg,
    };

    setCurNote(curData);

    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
    console.log('Messages: ', notes);
  }

  return (
    <>
      <section>
        <h2 className="heading">
          Project & <span>Review</span>
        </h2>

        <div className="card">
         <Card/>
        </div>
      </section>

      <h2 className="heading">
        Leave <span>Message</span>
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input type="text" placeholder="First Name" ref={fname} />
          <input type="text" placeholder="Last Name" ref={lname} />
          <input type="email" placeholder="Email " ref={email} />
          <input type="tel" placeholder="Phone No" ref={phone} />
          <div className="textarea">
            <div className="container">
              <div className="comment">
                <textarea
                  className="textinput"
                  type="text"
                  placeholder="Write Message"
                  rows={10}
                  cols={73}
                  ref={message}
                />
              </div>
            </div>
          </div>
        </div>
        <input className="button" type="submit" value="Send" />
      </form>
    </>
  );
}

export default Message;
