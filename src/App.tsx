import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const res = axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
      });

    return () => controller.abort();
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
