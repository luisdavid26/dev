import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hey world!');
});

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 