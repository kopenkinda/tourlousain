import { getAppConfig } from './app.config';

export function getGoogleOAuthConfig() {
  const appConfig = getAppConfig();
  return {
    clientID: process.env.OAUTH_CLIENT_ID!,
    clientSecret: process.env.OAUTH_CLIENT_SECRET!,
    callbackURL: `http://${appConfig.url}:${appConfig.port}/auth/google/redirect`,
  };
}
