import { useEffect, useState } from "react";

import SearchBox from "./components/SearchBox";
import UserTable from "./components/UserTable";

import { getUsers } from "./services/api";
import "./App.css";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    const newUser = {
      id: Date.now(),

      firstName: "Santhosh",

      company: {
        name: "Avivo AI",
        title: "Developer",
      },

      address: {
        country: "India",
      },
    };

    setUsers([...users, newUser]);
  };

  const deleteUser = (id: number) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName?.toLowerCase().includes(search.toLowerCase()) ||
      user.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.company?.title?.toLowerCase().includes(search.toLowerCase()) ||
      user.address?.country?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="title">User Management</h1>

      <div className="search-container">
        <SearchBox search={search} setSearch={setSearch} />
      </div>

      <br />
      <br />

      <div className="button-container">
        <button className="refresh-btn" onClick={fetchUsers}>
          Refresh
        </button>

        <button className="add-btn" onClick={addUser}>
          + Add User
        </button>
      </div>
      <p className="user-count">Total Users: {filteredUsers.length}</p>

      <br />
      <br />

      <UserTable users={filteredUsers} onDelete={deleteUser} />
    </div>
  );
}

export default App;
