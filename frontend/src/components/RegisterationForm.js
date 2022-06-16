import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const RegisterationForm = ({ saveUser }) => {
  const [formData, setFormData] = useState({});
  const handleFormData = (event) => {
    event.preventDefault();
    saveUser(formData);
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
        <TextField
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          label="Email"
          sx={{ m: 1 }}
        />
        <TextField
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          label="First Name"
          variant="outlined"
          sx={{ m: 1 }}
        />
        <TextField
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          variant="outlined"
          label="Last Name"
          sx={{ m: 1 }}
        />
        <Button type="submit" variant="contained" sx={{ m: 1 }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterationForm;
