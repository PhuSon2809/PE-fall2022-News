import React from "react";

export default function Contact() {
  return (
    <div classNameName="contact-container">
      <div className="contact-field">
        <div className="title">
          <h2>Contact Us</h2>
          <p>
            We're here to help! Send us your query via the form below or send us
            an email at <a href="thqviet12c5.ncthanh@gmail.com">here</a>&nbsp;
            for any issue you're facing.
            <br></br>We would love to get feedbacks from you, too!
          </p>
        </div>
        <div className="form">
          <form>
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="Email" />
            <textarea
              name="content"
              id="content"
              rows="8"
              cols="50"
              placeholder="Type anything you want to share with us ..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
