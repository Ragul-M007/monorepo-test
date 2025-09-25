// apps/super-admin/src/App.jsx
import React from "react";
import { Button } from "ui";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Super Admin Dashboard </h1>
      <h1>Hii admin </h1>

      <Button
        variant="primary"
        size="large"
        onClick={() => alert("Super Admin Action!")}
      >
        Create New User
      </Button>
      <br />
      <br />
      <Button variant="danger" onClick={() => confirm("Delete all data?")}>
        Delete All
      </Button>
    </div>
  );
}

export default App;
