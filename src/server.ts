import app from './app';

const door = 3300;

app.listen(door, () => {
  // eslint-disable-next-line no-console
  console.log(` Server started on port ${door}!`);
});
