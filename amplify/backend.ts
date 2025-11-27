// amplify/backend.ts

// --- DATA IMPORT (robust) ---
import * as schemaModule from "./data/resource";

// Prefer "data" named export → default export → full module
const data =
  (schemaModule as any).data ??
  (schemaModule as any).default ??
  schemaModule;

// --- AUTH IMPORT (robust) ---
import * as authModule from "./auth/resource";

// Prefer "AuthResource" → default export → undefined
const auth =
  (authModule as any).AuthResource ??
  (authModule as any).default ??
  undefined;

// --- BACKEND EXPORT ---
export const backend = {
  data,
  auth,
};











