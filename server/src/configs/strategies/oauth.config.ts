export function getOAuthConfig() {
  return {
    clientID: process.env.OAUTH_CLIENT_ID!,
    clientSecret: process.env.OAUTH_CLIENT_SECRET!,
    callbackURL: 'http://localhost:8080/auth/google/callback',
    p: process.env.SERVER_PORT,
  };
}
