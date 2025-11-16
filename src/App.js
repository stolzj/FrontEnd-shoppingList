import React from "react";
import ShoppingListDetailRoute from "./ShoppingListDetailRoute";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}>
      <h1 style={{ textAlign: "center" }}>Detail nákupního seznamu</h1>
      <ShoppingListDetailRoute />
    </div>
  );
}

export default App;
