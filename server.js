'use strict'

const express = require('express');
const server = express();
const PORT = process.env.PORT || 5500;
server.get('/test', (request, response) =>{
    response.send('working!!!')
}
);
server.use(express.static('./public'));
server.listen(PORT, () => {
    console.log('listening on port 5500')
});