import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // State to manage success message visibility

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Reset form data
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
      setIsSuccess(true); // Set success state to true
      // You can add the form submission logic here (e.g., API call)
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Login</h2>

        {/* Success Message */}
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Login successfully.</span>
            <button
              onClick={() => setIsSuccess(false)} // Button to dismiss the message
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M10 9l-1-1-3 3-3-3-1 1 3 3-3 3 1 1 3-3 3 3 1-1-3-3z" />
              </svg>
            </button>
          </div>
        )}

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-blue-600 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-600 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-blue-600 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
