// amplify/data/resource.ts
import { defineAuth } from "@aws-amplify/backend";

// Minimal example schema (you can expand later)
export const data = {
  version: "1.0",
  models: {
    Todo: {
      fields: {
        id: { type: "ID", required: true },
        name: { type: "String", required: true },
        done: { type: "Boolean", required: false }
      }
    }
  }
};

export default data;




























