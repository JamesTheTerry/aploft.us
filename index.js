let bodyParser = require('body-parser');
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());


// const dist = path.join(__dirname, '/../client/dist');
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/dist/index.html');
// });

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on localhost:${port}`));
