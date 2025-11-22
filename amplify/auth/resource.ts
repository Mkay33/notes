// amplify/auth/resource.ts
import { Stack } from "aws-cdk-lib";
import { Auth } from "@aws-amplify/auth-construct";

// Use the stack from backend.ts if you want shared stack
import { stack } from "../backend";

// Create the Auth construct
export const auth = new Auth(stack, "Auth", {
  userPoolClientProps: {
    oAuth: {
      flows: {
        authorizationCodeGrant: true, // enables OAuth code grant
      },
      scopes: ["email", "openid", "profile"],
      callbackUrls: ["http://localhost:3000/"], // update as needed
      logoutUrls: ["http://localhost:3000/"],
      domainPrefix: "myapp", // replace with a unique prefix
    },
  },
  userAttributes: {
    email: true,
  },
});



