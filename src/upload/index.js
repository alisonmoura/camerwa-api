import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let ext;
    if (file.originalname.lastIndexOf('.') < 0) ext = '.jpeg';
    else
      ext = file.originalname.slice(
        file.originalname.lastIndexOf('.'),
        file.originalname.length
      );
    const hash = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, hash + ext);
  }
});

export default multer({ storage: storage });
