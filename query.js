express = require('express')
app = express()

app.get('/search', function(req, res) {
    //get query string
    var query = req.query
    
    //send it
    res.send(query)
})
app.listen(process.argv[2])