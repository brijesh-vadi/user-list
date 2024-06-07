import React from "react";

const Dropdown = ({ users, onSelect }) => {
  const handleChange = (event) => {
    const userId = parseInt(event.target.value);
    onSelect(userId);
  };

  return (
    <div className="mb-4 w-1/12">
      <label
        htmlFor="userId"
        className="block text-sm font-medium text-gray-700">
        Select User ID:
      </label>
      <select
        id="userId"
        name="userId"
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
