import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
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
      const response = await fetch("https://nodemailerapi.vercel.app/send-email", {
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
        className="mt-6 md:h-full md:flex md:flex-col md:gap-y-6">
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        {/* <!-- Name --> */}
        <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0">
          <input
            className="bg-transparent placeholder-black"
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            pattern="\S+.*"
            placeholder="Name..."
            onChange={handleForm}
          />
        </div>

        {/* <!-- Email --> */}
        <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0">
          <input
            className="bg-transparent placeholder-black"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            placeholder="Email..."
            onChange={handleForm}
          />
        </div>

        {/* <!-- Textbox --> */}
        <div className="border-2 py-3 px-2 mb-8 border-black md:mb-0">
          <textarea
            className="h-full bg-transparent placeholder-black"
            name="question"
            value={formData.question}
            placeholder="Your Question"
            id="question"
            cols="30"
            rows="3"
            minLength="10"
            maxLength="100"
            onChange={handleForm}
            required></textarea>
        </div>

        {/* <!-- Submit form --> */}
        <div className="relative flex flex-col md:items-center">
          <button
            type="submit"
            id="submit-button"
            className="w-full uppercase font-medium bg-accent px-4 py-2 text-black shadow-md"
            disabled={isSubmitting} // Disable button based on isSubmitting state
          >
            <span className="pointer-none text-sm opacity-75">
              {isSubmitting ? "Submitting..." : "Get Started"}
            </span>
          </button>
          {/* <!-- Form submit status messages --> */}
          {formResponse === true && toast.success("Message sent successfully")}
          {formResponse === false && toast.error("Try again, message failed")}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
