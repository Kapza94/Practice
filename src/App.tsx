import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //get returns a promise then gets response obj or error
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/xusers");
        setUsers(res.data);
        // .then((res) => setUsers(res.data))
        // .catch((err) => setErr(err.message));
      } catch (err) {
        setErr((err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {err && <p className="text-danger">{err}</p>}{" "}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
