import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contact.css";
import { motion } from "framer-motion";


function Contact(props) {
  const formSparkUrl = "https://formspree.io/f/xqkonner";
  const recaptchaKey = "6LdWaeolAAAAAFdL1Xcgy6Mv61xbFTBbAFrQhluI";
  const recaptchaRef = useRef();

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "success-msg",
        text: "Thanks, I will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "error-msg",
        text: "Sorry, there was a problem.",
      });
    }
  };

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const key = id;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current.classList.add("slide-from-left");
  }, []);

  return (
    <motion.div
    ref={pageRef}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
  >
    <div className="contact">
      <div className="contact-container">
        <h1>
          <span className="contactHead">Contact <span className="nestedHead">Me</span></span>
        </h1>
        {message && (
          <div className={message.class}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm} className="contactForm">
          <div>
            <label className="labelTag" htmlFor="name">Name</label>
            <input
              onChange={updateFormControl}
              type="text"
              id="name"
              value={formState.name}
              name="name"
              className="name text-area"
            />
          </div>
          <div>
            <label className="labelTag" htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              type="email"
              id="email"
              value={formState.email}
              name="email"
              className="email text-area"
            />
          </div>
          <div>
            <label className="labelTag" htmlFor="message">Message</label>
            <textarea
              onChange={updateFormControl}
              id="message"
              value={formState?.message}
              name="message"
              className="message text-area" 
            ></textarea>
          </div>

          <ReCAPTCHA
            className="recaptcha-dark"
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
            theme="dark"
          />
          <ReCAPTCHA
            className="recaptcha-light"
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
            theme="light"
          />
          

          <button
            disabled={submitting}
            className="submit-button"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
    </motion.div>
  );
}

export default Contact;
