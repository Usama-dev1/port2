import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";
import { CiMail } from "react-icons/ci";
const ContactHome = () => {
     const [formResponse, setFormResponse] = useState(null);
     const [formData, setFormData] = useState({
       name: "",
       email: "",
       question: "",
     });
     const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disabled

     const handleForm = (e) => {
       const { name, value } = e.target;
       setFormData((prevState) => ({ ...prevState, [name]: value }));
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       setIsSubmitting(true); // Disable the button when form is submitted
       try {
         const response = await fetch("https://port2-seven.vercel.app/send-email", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         });

         if (response.ok) {
           const result = await response.json();
           console.log("Email sent successfully:", result);
           setFormResponse(true);
           setFormData({ name: "", email: "", question: "" }); // Reset form
         } else {
           const error = await response.json();
           console.error("Failed to send email:", error);
           setFormResponse(false);
         }
       } catch (error) {
         console.error("Error:", error);
         setFormResponse(false);
       } finally {
         setIsSubmitting(false); // Re-enable the button after form submission
       }
     };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        name="contact"
        className="md:h-full md:flex md:items-end md:gap-x-6">
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* <!-- Name and Email --> */}
        <div className="md:flex md:gap-x-4">
          <div className="md:flex md:flex-col md:gap-y-4">
            <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
              <input
                className="bg-transparent h-8 placeholder-black"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleForm}
                name="name"
                required
                pattern="\S+.*"
                placeholder="Name..."
              />
            </div>
            <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
              <input
                className="bg-transparent h-8 placeholder-black"
                type="email"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleForm}
                required
                placeholder="Email..."
              />
            </div>
          </div>

          {/* <!-- Textbox --> */}
          <div className="border-2 py-5 px-1 mb-8 border-black md:mb-0 bg-white">
            <textarea
              className="h-full bg-transparent placeholder-black"
              name="question"
              placeholder="Your Question"
              id="question"
              value={formData.question}
              onChange={handleForm}
              cols="40"
              rows="5"
              minLength="10"
              maxLength="100"
              required></textarea>
          </div>
        </div>

        {/* <!-- Submit form --> */}
        <div className="relative md:flex md:flex-col md:items-center">
          <button
            type="submit"
            id="submit-button"
            disabled={isSubmitting}
            className="inline-block uppercase font-medium px-6 py-2 bg-black hover:text-black hover:bg-white text-white shadow-md">
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {/* <!-- Form submit status messages --> */}

          {/* <!-- Form submit status messages --> */}
          {formResponse === true && toast.success("Message sent successfully")}
          {formResponse === false && toast.error("Try again, message failed")}

          {/* <!-- Social Links --> */}

          {/* <!-- Icons --> */}
          <div className="opacity-75 mt-2 md:mt-0">
            {/* <!-- Mail Icon --> */}
            <a href="#" className="p-2 pl-0 inline-block md:pb-0">
              <CiMail className=" hover:text-red-500" />
            </a>

            {/* <!-- Twitter Icon --> */}
            <a href="#" className="p-2 inline-block md:pb-0">
              <FaTwitter className=" hover:text-red-500" />
            </a>
            {/* <!-- Linkedin Icon --> */}
            <a href="#" className="p-2 inline-block md:pb-0">
              <FaLinkedin className=" hover:text-red-500" />
            </a>

            {/* <!-- Facebook Icon --> */}
            <a href="#" className="p-2 inline-block md:pb-0 md:pr-0">
              <FaFacebook className=" hover:text-red-500" />
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactHome
