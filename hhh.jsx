import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../context/UsersContext";
import Input from "../components/Input";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [newUser, setNewUser] = useState({});
  const { selectedUser: user, getUser, addUser } = useUsers();

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  console.log(user);

  function handleChange(e) {
    const newUser = {};
    setNewUser((prev) => [...prev, newUser]);
  }

  return (
    <>
      <div className="mx-96 my-20 border border-blue-500 rounded-md  p-10 ">
        <form action="" className="">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Name:</label>
                <Input value={user.name} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">UserName:</label>
                <Input value={user.username} onChange={handleChange} />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Company Name:</label>
                <Input value={user.company?.name} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Website:</label>
                <Input value={user?.website} onChange={handleChange} />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Email Address:</label>
                <Input value={user.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Phone:</label>
                <Input value={user?.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">Street:</label>
                <Input value={user?.address?.street} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="">City:</label>
                <Input value={user?.address?.city} onChange={handleChange} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetailsPage;
