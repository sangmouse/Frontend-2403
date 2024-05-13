import { FormSection } from "./FormSection";
import "./UserPage.css";
import { UserList } from "./UserList";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [userList, setUserList] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  const fetchUsers = async () => {
    const data = await fetch("http://localhost:3000/users");
    const userList = await data.json();
    setUserList(userList);
  };

  const createUser = async (user) => {
    console.log("sdsdsd", user);
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    });
    await fetchUsers();
  };

  const deleteUser = async (userID) => {
    await fetch(`http://localhost:3000/users/${userID}`, { method: "DELETE" });
    await fetchUsers();
  };

  const updateUser = async (user) => {
    await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    });
    setEditedUser(null);
    await fetchUsers();
  };

  const handleEdit = (user) => {
    setEditedUser(user);
  };

  useEffect(() => {
    fetchUsers();
    return () => fetchUsers;
  }, []);

  return (
    <div className="user-page">
      <h1>User Page Project Final</h1>
      <FormSection
        createUser={createUser}
        editedUser={editedUser}
        updateUser={updateUser}
      />
      <UserList
        userList={userList}
        deleteUser={deleteUser}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default UserPage;
