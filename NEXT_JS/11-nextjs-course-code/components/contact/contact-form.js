import { useState, useEffect } from "react";

import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const REQUEST_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};

async function sendContactData(contactDetails) {
  const response = await fetch(" api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong!");
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  function resetValues() {
    setEnteredMessage("");
    setEnteredName("");
    setEnteredEmail("");
  }

  useEffect(() => {
    if (
      requestStatus === REQUEST_STATUS.SUCCESS ||
      requestStatus === REQUEST_STATUS.ERROR
    ) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus(REQUEST_STATUS.PENDING);
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      resetValues();
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus(REQUEST_STATUS.ERROR);
      resetValues();
    }
  }

  let notification;
  if (requestStatus === REQUEST_STATUS.PENDING) {
    notification = {
      status: REQUEST_STATUS.PENDING,
      title: "Sending message",
      message: "Your message is on it is way",
    };
  }
  if (requestStatus === REQUEST_STATUS.SUCCESS) {
    notification = {
      status: REQUEST_STATUS.SUCCESS,
      title: "Success ",
      message: "Message send successfully",
    };
  }
  if (requestStatus === REQUEST_STATUS.ERROR) {
    notification = {
      status: REQUEST_STATUS.ERROR,
      title: "Error ",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you ?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
