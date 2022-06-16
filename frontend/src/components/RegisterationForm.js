import React, { useState } from "react";

const RegisterationForm = () => {
  const [formData, setFormData] = useState({});
  const handleFormData = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <form method="post" onSubmit={handleFormData}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          FirstName:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterationForm;
