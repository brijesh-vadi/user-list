import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchUser();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [nestedKey, subKey] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        [nestedKey]: {
          ...prevUser[nestedKey],
          [subKey]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        user
      );
      alert("User updated successfully!");

      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className=" mx-auto p-4">
      <div className="flex flex-col gap-2">
        <h2 onClick={() => navigate("/")} className="cursor-pointer">
          &larr; Back
        </h2>
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
      </div>
      {user && (
        <>
          <div className="flex justify-evenly gap-10">
            <div className="w-1/3">
              <Input
                label="Name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
              <Input
                label="Username"
                name="username"
                value={user.username}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
              <Input
                label="Website"
                name="website"
                value={user.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/3">
              <Input
                label="City"
                name="address.city"
                value={user.address.city}
                onChange={handleInputChange}
              />
              <Input
                label="Street"
                name="address.street"
                value={user.address.street}
                onChange={handleInputChange}
              />
              <Input
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Button onClick={handleUpdateUser}>Update User</Button>
        </>
      )}
    </div>
  );
};

export default UserDetails;
