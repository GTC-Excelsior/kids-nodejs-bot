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
  }, 10);
});


// Middleware for logging
bot.use({
    receive: function (event, next) {
      let randomNum = Math.floor(Math.random()*3);
      scores.push(randomNum);
      require('fs').writeFile(
        './testScores.js',
        `module.exports = { scores: [${scores}] };`,
        function (err) {
            if (err) {
                console.log(err);
            }
        }
      );
      console.log(scores);
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
  					builder.CardAction.imBack(session, "What kinds of things are they doing or saying?", "I’m sorry to hear that. What kinds of things are they doing or saying?"),
  					builder.CardAction.imBack(session, "Are they bullying you?", "Are they bullying you?"),
  					builder.CardAction.imBack(session, "Tell me about your experience", "Tell me about your experience"),
  					builder.CardAction.imBack(session, "What did you do to them?", "What did you do to them?")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 10);
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
  }, 10);
}).triggerAction({ matches: /^(Tell me about your experience)/i });

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
  }, 10);
}).triggerAction({ matches: /^(Are you safe?)/i });

bot.dialog('fourthDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("No. I have to go. Bye")
  setTimeout(function () {
      session.send(msg);
  }, 10);
  session.save();
}).triggerAction({ matches: /^(Is now a good time to talk?)/i });

module.exports = scores;
