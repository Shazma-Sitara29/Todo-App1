import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Only alphabets are allowed in the name';
      formIsValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ name: '', email: '', message: '' });
      setSuccessMessageVisible(true); // Show success message
      // Optional: Hide success message after a few seconds
      setTimeout(() => setSuccessMessageVisible(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-slate-100 font-serif">
      <h1 className="text-center text-4xl font-bold my-8">Contact Us</h1>
      <div className="bg-white text-blue-900 p-10 flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left side - Let's Talk Section */}
        <div className="md:w-1/3 flex flex-col space-y-4 shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold">Let's Talk</h2>
          <p>I'm open to discussing healthcare solutions and partnership opportunities.</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-xl mr-2">📧</span>
              <a href="mailto:info@urgentcare.com" className="hover:underline">info@urgentcare.com</a>
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🔗</span>
              <a href="https://www.linkedin.com/in/shazma-sitara" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🌐</span>
              <a href="https://github.com/Shazma-Sitara29" className="hover:underline">GitHub</a>
            </li>
          </ul>

          {/* Map Section with Heading */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
            <div className="shadow-lg rounded-lg overflow-hidden" style={{ height: '250px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.629123262202!2d67.03041301539799!3d24.8614626516781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33edc1d8ef3f7%3A0x5f8a8b5a362d4e59!2sShahrah-e-Faisal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699357227757!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg">
             </iframe>

            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="md:w-1/2 lg:w-1/3 bg-blue-50 p-8 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          {successMessageVisible && (
            <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-md text-center">
              Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            <div>
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Message"
                rows="4"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
