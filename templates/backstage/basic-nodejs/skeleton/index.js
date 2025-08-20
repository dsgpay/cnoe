const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from ${{ values.name }} running on Cnoe.io!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App ${{ values.name }} listening on port ${port}`);
});
