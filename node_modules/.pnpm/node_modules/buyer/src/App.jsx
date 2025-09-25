// apps/buyer/src/App.jsx
import React from "react";
import { Button } from "ui";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buyer Dashboard</h1>
      <Button onClick={() => alert("Primary clicked!")}>Primary Button</Button>
      <br />
      <br />
      <Button variant="secondary" size="large">
        Secondary Large
      </Button>
      <br />
      <br />
      <Button variant="danger" disabled>
        Disabled Danger
      </Button>
    </div>
  );
}

export default App;
