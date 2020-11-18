import dotenv from 'dotenv';

import { app } from './server';

dotenv.config();

const PORT = process.env.SERVER_PORT || 1337;

app.listen(PORT, () => {
  console.info(`App running on http://localhost:${PORT}/`);
});
