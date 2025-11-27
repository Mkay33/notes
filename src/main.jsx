// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// If your generate outputs created a config / amplify_outputs file, import it.
// Try to find the file under amplify/outputs or similar; example below assumes outputs default export:
import amplifyOutputs from "../amplify/outputs"; // adjust path if different
import { Amplify } from "aws-amplify";

if (amplifyOutputs) {
  Amplify.configure(amplifyOutputs);
}

createRoot(document.getElementById("root")).render(<App />);


