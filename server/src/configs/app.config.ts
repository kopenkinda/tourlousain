export function getAppConfig() {
  return {
    url: process.env.APP_URL! || 'localhost',
    port: process.env.SERVER_PORT! || 1337,
  };
}
