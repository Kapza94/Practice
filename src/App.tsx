import React, { useEffect, useRef, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const res = apiClient
      .get<User[]>("/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setErr(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Luka" };
    setUsers([...users, newUser]);

    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setErr(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setErr(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {err && <p className="text-danger">{err}</p>}{" "}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>
                Update
              </button>
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
