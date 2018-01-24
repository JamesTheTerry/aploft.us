let bodyParser = require('body-parser');
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Welcome!');
// });

app.listen(3000, function() {
  console.log('listening at http://localhost:3000!');
});
