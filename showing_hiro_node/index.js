const express = require('express');
const app = express();
const path = require('path')
const port = 8080;

function sendHtml(request, response){
    response.sendFile(path.join(__dirname + "/index.html"));
}

app.get('/', (req, resp) => {resp.send('Hello Hiro!')});
app.get('/click', sendHtml );
app.get('/hiroshi/is/cool', (req, resp) => {
    resp.send('yea he is pretty cool huh')}
);
app.listen(port, () => console.log("App started!!"));