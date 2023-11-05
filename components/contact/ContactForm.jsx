import { useState } from "react";
import CustomButton from "../../reusable/CustomButton"; // Rename the imported component

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., send the data to a server or perform other actions.
    console.log(formData); // Replace this with your actual form submission logic.
  };

  return (
    <section className="grow text-white">
      <div className="flex flex-col items-start text-start w-full p-4">
        <h5 className="text-3xl font-normal">Leave us your info</h5>
        <form onSubmit={handleSubmit} className="mt-4 w-full bg-white p-4">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="text-base font-normal text-gray-500 "
            >
              Your Full Name <span className="text-orange-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-base font-normal text-gray-500"
            >
              Your Email <span className="text-orange-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="text-base font-normal text-gray-500"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-base font-normal text-gray-500"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-9 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <CustomButton title={"Send Message"} link={""} />
        </form>
      </div>
    </section>
  );
}
