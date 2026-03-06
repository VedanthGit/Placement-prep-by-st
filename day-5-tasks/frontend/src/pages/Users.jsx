import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser
} from "../services/userService";

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {

    setLoading(true);

    try {

      const res = await getUsers();
      setUsers(res.data);

    } catch (err) {

      setError("Failed to fetch users");

    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {

    await createUser("New User");
    fetchUsers();

  };

  const removeUser = async (id) => {

    await deleteUser(id);
    fetchUsers();

  };

  return (

    <div>

      <h1>Users</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <button onClick={addUser}>Add User</button>

      {users.map(u => (

        <div key={u.id}>
          {u.name}

          <button onClick={() => removeUser(u.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );
};

export default Users;