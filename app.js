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

const bot = new builder.UniversalBot(connector)
server.post('/api/messages', connector.listen());

// // Luis and intent recognition magic
// const model = `https://api.projectoxford.ai/luis/v1/application?id=${process.env.LUIS_ID}&subscription-key=${process.env.LUIS_KEY}&verbose=true`
//
// bot.recognizer(new builder.LuisRecognizer(model))

const scriptChoices = [
  "demo script 1",
  "demo script 2"
];

  // Send proactive messages on connection
bot.on('conversationUpdate', (message) => {
  if (message.membersAdded) {
    if (message.membersAdded[0].id == 'default-bot') {
        const initialProactiveMessage = new builder.Message()
            .address(message.address)
            .text("Welcome to the Kids Help Phone Assessment Bot!");
        bot.send(initialProactiveMessage);

        const secondProactiveMessage = new builder.Message()
              .address(message.address)
              .text("Type 'scripts' for a list of scripts to run");
          bot.send(secondProactiveMessage);
    }
  }
});

// Send script list
bot.dialog('/', ((session) => {
  var msg = new builder.Message(session)
  	.text("Please select a script to run:")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "demo script 1", "demo script 1"),
  					builder.CardAction.imBack(session, "demo script 2", "demo script 2")
  				]
  			));
  session.send(msg);
})).triggerAction({ matches: /^scripts/i });


// Call createLibrary for all scripts
bot.library(require('./scripts/demo1').createLibrary());
bot.library(require('./scripts/demo2').createLibrary());
const awardPoints = require('./scripts/scores');

// Middleware for logging scores
bot.use({
    receive: function (event, next) {

      // // conditionally award points for each answer
      awardPoints(event.text);

      next();
    }
});
