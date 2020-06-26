import app from './app';

const door = 3300;

app.listen(door, () => {
  console.log(` Server started on port ${door}!`);
});
