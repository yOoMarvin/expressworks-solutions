express = require('express')
app = express()
fs = require('fs')

app.get('/books', function(req, res){
    var filename = process.argv[3]
    fs.readFile(filename, function(err, data) {
        //handle error
        if (err) return res.sendStatus(500)
        //try to parse json
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
    })
})

app.listen(process.argv[2])