import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <>
      <tr key={user.id} className="bg-white border-b text-center">
        <td className="px-4 py-2">{user.id}</td>
        <td className="px-4 py-2">{user.name}</td>
        <td className="px-4 py-2">
          <Link to={`/user/${user.id}`} className="text-blue-500 underline">
            View Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default User;
