import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers =
    searchTerm.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : users;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex gap-20 items-center">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700">
              Search by Name:
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <Dropdown users={users} onSelect={handleUserSelect} />
          <Button onClick={() => navigate("/user/add")}>Add User</Button>
        </div>
      )}
      {!loading && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedUser ? (
              <tr key={selectedUser.id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {selectedUser.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {selectedUser.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {selectedUser.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {selectedUser.username}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Link to={`/user/${selectedUser.id}`}>View Details</Link>
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-blue-500">
                    <Link to={`/user/${user.id}`}>View Details</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
