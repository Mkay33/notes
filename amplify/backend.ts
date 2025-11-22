// amplify/backend.ts
import { Stack, App } from "aws-cdk-lib";
import { auth } from "./auth/resource";

const app = new App();

// Create a stack for Amplify backend
export const stack = new Stack(app, "AmplifyBackendStack");

// The auth construct has already been exported from auth/resource.ts
// You can import and use other backend resources here



