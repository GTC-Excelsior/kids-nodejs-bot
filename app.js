const restify = require('restify');
const builder = require('botbuilder');
require('dotenv').config();

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

assessBot.create(connector);

server.post('/api/messages', connector.listen());
