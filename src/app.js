import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import app from './server';
import db from './db';

import PhotoRouter from './routers/photo-router';

const PORT = process.env.PORT || 3000;

async function init() {
  
  if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

  await db.connect();
  console.log('DB connected');

  PhotoRouter(app);

  app.get('/', (req, res) => {
    res.send('Camerwa API');
  });

  app.listen(PORT, () => {
    console.log(`API running on ${PORT}`);
  });
}

init();
