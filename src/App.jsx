// src/App.jsx
import React, { useEffect, useState } from "react";

// Adjust the import path to the generated client you found in step 2.
// Example common paths:
import { client } from "../amplify/data/client";      // try this first
// import { client } from "../amplify/data/client/index"; // alternative

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        // Replace `User` below with the actual model name exported by the generated client.
        // Check the generated client file for `client.models.<ModelName>`
        const modelNames = Object.keys(client.models || {});
        console.log("Available models:", modelNames);

        // Use a model if your DB has one named `users` or `User`
        const modelName = modelNames.find(n => /user/i.test(n)) || modelNames[0];
        if (!modelName) {
          console.warn("No models generated. Ensure schema generated correctly.");
          setUsers([]);
          return;
        }

        // list() is the typical API — see generated client for exact API
        const resp = await client.models[modelName].list();
        if (!cancelled) {
          setUsers(resp.data || resp);
        }
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div>Loading…</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Users</h1>
      {users.length === 0 ? (
        <div>No users</div>
      ) : (
        <ul>
          {users.map(u => (
            <li key={u.id ?? JSON.stringify(u)}>{u.name ?? u.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


