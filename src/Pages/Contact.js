import React from 'react';
import '../App.css';
import emailjs from 'emailjs-com';

export default function ContactUs() {
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o2zpfam', 'template_5sx9klm', e.target, 'user_WQUPLIBm0LrPDpllS3ucB').then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      e.target.reset();
    }
    return(
        <div>
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />

        <label>Email</label>
        <input  type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    )
}