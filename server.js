



const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
let users =[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }];


app.get('/get_all_users', (req, res) => {
  res.send(users);
});

app.listen(3000, () => console.log('Server is running...'));

