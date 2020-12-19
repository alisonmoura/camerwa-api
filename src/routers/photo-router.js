import express from 'express';
import upload from './../upload';
import Photo from './../models/photo';
const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Photo.find({}));
});

router.post('/', upload.single('photo'), async (req, res) => {
  const photo = {
    filename: req.file.filename
  };

  await Photo.create(photo);
  res.send('OK');
});

export default (app) => app.use('/photo', router);
