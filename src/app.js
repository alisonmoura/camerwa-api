import app from './server';
import upload from './upload';

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Camerwa API');
});

app.post('/photo', upload.single('photo'), (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
