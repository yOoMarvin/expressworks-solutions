var express = require('express')
var app = express()

//use arg to get file
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])