import React from "react";
import RegisterationForm from "../components/RegisterationForm";
import { postData } from "../networking/Networking";

const UserRegisteration = () => {
  const postOptions = (data) => {
    return {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  };

  const saveUser = (user) => {
    postData("/users", postOptions(user));
  };

  return (
    <div>
      <RegisterationForm saveUser={saveUser} />
    </div>
  );
};

export default UserRegisteration;
