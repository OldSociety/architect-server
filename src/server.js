require('dotenv').config()

//******** SERVER CONFIG **********//
var port = process.env['PORT'] = process.env.PORT || 4000;

http.createServer(app).listen(port, function() {
    console.log("Express server listening with http on port %d in %s mode", this.address().port, app.settings.env);
});

app.all('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https')
        res.redirect('https://' + req.headers.host + req.url)
    else
        next() /* Continue to other routes if we're not redirecting */
});

const { PORT = 5000 } = process.env

const app = require('./app')
const listener = () => console.log(`Listening on Port ${PORT}!`)

app.listen(PORT, listener)