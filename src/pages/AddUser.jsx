import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const initialUserData = {
  name: "",
  username: "",
  email: "",
  address: {
    city: "",
    street: "",
  },
  phone: "",
};

const AddUser = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialUserData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [nestedKey, subKey] = name.split(".");
      setUserData((prevUserData) => ({
        ...prevUserData,
        [nestedKey]: {
          ...prevUserData[nestedKey],
          [subKey]: value,
        },
      }));
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  // const handleAddUser = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://jsonplaceholder.typicode.com/users",
  //       userData
  //     );
  //     alert("User added successfully!");
  //     onUserAdded(response.data);
  //     setUserData(initialUserData);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error adding user:", error);
  //   }
  // };

  const handleAddUser = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", userData);
      alert("User added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className=" mx-auto p-4">
      <div className="flex flex-col gap-2">
        <h2 onClick={() => navigate("/")} className="cursor-pointer">
          &larr; Back
        </h2>
        <h2 className="text-xl font-bold mb-4">Add User</h2>
      </div>
      <div className="flex justify-evenly gap-10">
        <div className="w-1/3">
          <Input
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <Input
            label="Username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <Input
            label="Phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-1/3">
          <Input
            label="City"
            name="address.city"
            value={userData.address.city}
            onChange={handleInputChange}
          />
          <Input
            label="Street"
            name="address.street"
            value={userData.address.street}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Button onClick={handleAddUser}>Add User</Button>
    </div>
  );
};

export default AddUser;
