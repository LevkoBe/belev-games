import React from "react";
import "./components/styles/About.css";
import Navigation from "./components/Navigation";

const About = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        {" "}
        <h1 className="header">About Us</h1>
        <p>Welcome to our website! Here's some information about us.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to contact us:</p>
        <ul>
          <li>Email: your@email.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
        <h2>Our Location</h2>
        <p>Find us on the map:</p>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.068339647952!2d30.427249876288975!3d50.45845208678792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc481d3a7e51%3A0xc3691be9bdb8932c!2sMykoly%20Shpaka%20St%2C%203%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1698940336615!5m2!1sen!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default About;
