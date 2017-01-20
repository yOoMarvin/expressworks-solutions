express = require('express')
app = express()

app.put('/message/:id', function(req, res) {
    //get id
    var id = req.params.id
    var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    
    res.send(str)
})
app.listen(process.argv[2])