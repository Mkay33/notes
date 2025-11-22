export const auth = defineAuth({
  loginWith: {
    email: true, // allow email/password login
    externalProviders: {
      google: {
        clientId: "1018334428394-16srs953e06uc6qmd40rhnmegdlmlq8e.apps.googleusercontent.com",       
        clientSecret: "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",
        scopes: ["email", "openid", "profile"],   
        redirectSignInUrl: "https://mkayapp-dev.auth.us-east-1.amazoncognito.com/oauth2/idpresponse/",  
        redirectSignOutUrl: " https://mkayapp-dev.auth.us-east-1.amazoncognito.com/logout/", 
      },
    },
  },
});







