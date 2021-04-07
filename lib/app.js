const express = require('express');
const app = express();


app.use(express.json());


app.get('/favicon.ico', (req, res) => res.sendStatus(204));


app.use('/api/trivia', require('./controllers/trivia-router'));

app.use((err, req, res, next) => {
    res.status(404)
    res.json({ error: err.message })
})



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;







