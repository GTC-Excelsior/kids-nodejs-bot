var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

let scores = [];

var bot = new builder.UniversalBot(connector, function (session) {
  session.sendTyping();
  setTimeout(function () {
      session.send("Hi I need some help");
  }, 3500);
});

function awardPoints(text) {
  switch(text) {
    case "I’m sorry to hear that. What kinds of things are they doing or saying?":
      scores.push(2);
    case "Are they bullying you?":
      scores.push(1);
    case "What did you do to them?":
      scores.push(0);
  }
}


// Middleware for logging
bot.use({
    receive: function (event, next) {
      // conditionally award points for each answer
      awardPoints(event.text);
      require('fs').writeFile(
        './testScores.js',
        `module.exports = { scores: [${scores}] };`,
        function (err) {
            if (err) {
                console.log(err);
            }
        }
      );
      next();
    }
});

bot.dialog('firstDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("Someone is being mean to me at school")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "I’m sorry to hear that. What kinds of things are they doing or saying?", "I’m sorry to hear that. What kinds of things are they doing or saying?"),
  					builder.CardAction.imBack(session, "Are they bullying you?", "Are they bullying you?"),
  					builder.CardAction.imBack(session, "What did you do to them?", "What did you do to them?")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(How can I help?)/i });

bot.dialog('secondDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("Sometimes I feel so alone and I think maybe it would be better if I was dead")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Are you safe?", "Are you safe?")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(I’m sorry to hear that. What kinds of things are they doing or saying|Are they bullying you|What did you do to them)/i });

bot.dialog('thirdDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("Yes, I'm safe")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Is now a good time to talk?", "Is now a good time to talk?")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(Are you safe?)/i });

bot.dialog('fourthDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("No. I have to go. Bye")
  setTimeout(function () {
      session.send(msg);
  }, 3500);
  session.save();
}).triggerAction({ matches: /^(Is now a good time to talk?)/i });

module.exports = scores;
