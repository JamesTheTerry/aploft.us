let bodyParser = require('body-parser');
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Welcome!');
// });

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on localhost:${port}`));
