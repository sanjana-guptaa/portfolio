import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9hirlm", // Replace with your EmailJS Service ID
        "template_q90o07b", // Replace with your EmailJS Template ID
        formRef.current,
        "9JFsiu_SyuMrDm_5U", // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-darkBackground dark:to-darkCardBackground transition-colors duration-300"
    >
      {/* Background Elements */}
      {/*<div className="absolute top-0 left-10 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30"></div>*/}
      {/*<div className="absolute bottom-0 right-10 w-60 h-60 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-30"></div>*/}

      <div className="container mx-auto px-5 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-4 uppercase tracking-wider"
          style={{
            textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow for emphasis
          }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 bg-white dark:bg-darkCardBackground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* Name Input */}
              <div className="flex items-center gap-3 border border-primary dark:border-darkTextSecondary rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-darkTextPrimary">
                <AiOutlineUser className="text-primary dark:text-darkTextPrimary text-2xl" />
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full outline-none bg-transparent text-textPrimary dark:text-darkTextPrimary"
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center gap-3 border border-primary dark:border-darkTextSecondary rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-darkTextPrimary">
                <AiOutlineMail className="text-primary dark:text-darkTextPrimary text-2xl" />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full outline-none bg-transparent text-textPrimary dark:text-darkTextPrimary"
                />
              </div>

              {/* Message Input */}
              <div className="flex items-start gap-3 border border-primary dark:border-darkTextSecondary rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-darkTextPrimary">
                <AiOutlineMessage className="text-primary dark:text-darkTextPrimary text-2xl mt-1" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full outline-none bg-transparent text-textPrimary dark:text-darkTextPrimary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary dark:bg-darkTextPrimary text-background dark:text-darkBackground px-6 py-3 rounded-lg shadow-md hover:bg-primaryHover dark:hover:bg-darkTextSecondary transition"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-[28rem] lg:w-1/2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
          >
            <MapContainer
              center={[40.743, -74.032]}
              zoom={13}
              className="h-96"
              dragging={false}
              scrollWheelZoom={false}
              zoomControl={false}
              doubleClickZoom={false}
              attributionControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                className="dark:filter-dark filter-light"
              />
              <Marker position={[40.743, -74.032]}>
                <Popup>
                  Hoboken, NJ
                  <br />
                  Come visit!
                </Popup>
              </Marker>
            </MapContainer>
            <div className="flex h-fit items-center justify-center mt-4 text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-4 uppercase tracking-wider">
              <FaMapMarkerAlt className="w-8 h-8 text-textPrimary dark:text-darkTextPrimary" />
              <p className="text-center text-sm text-textPrimary dark:text-darkTextPrimary">
                Hoboken, NJ - Come visit!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
