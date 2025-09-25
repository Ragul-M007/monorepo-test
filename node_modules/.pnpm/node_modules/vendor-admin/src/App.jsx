// apps/vendor-admin/src/App.jsx
import React from "react";
import { Button } from "ui";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Vendor Admin Portal Hii</h1>
      <Button variant="secondary" size="medium">
        View Orders
      </Button>
      <br />
      <br />
      <Button variant="primary" onClick={() => alert("Product added!")}>
        Add New Product
      </Button>
    </div>
  );
}

export default App;
