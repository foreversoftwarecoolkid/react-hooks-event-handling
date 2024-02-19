import React, { useState } from "react";

function Login() {
  // State to manage form data
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Function to handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with data:", formData);

    // Additional logic for form submission (e.g., API request)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Enter username..."
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter password..."
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
