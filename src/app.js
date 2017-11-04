var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send("Hi I need some help");
});

bot.dialog('firstDialog', function (session) {
  var msg = new builder.Message(session)
  	.text("Someone is being mean to me at school")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "I’m sorry to hear that. What kinds of things are they doing or saying?", "I’m sorry to hear that. What kinds of things are they doing or saying?"),
  					builder.CardAction.imBack(session, "Are they bullying you?", "Are they bullying you?"),
  					builder.CardAction.imBack(session, "Tell me about your experience", "Tell me about your experience"),
  					builder.CardAction.imBack(session, "What did you do to them?", "What did you do to them?")
  				]
  			));
  session.send(msg);
}).triggerAction({ matches: /^(answer)/i });

bot.dialog('secondDialog', function (session) {
  var msg = new builder.Message(session)
  	.text("Sometimes I feel so alone and I think maybe it would be better if I was dead")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Are you safe?", "Are you safe?")
  				]
  			));
  session.send(msg);
}).triggerAction({ matches: /^(Tell me about your experience)/i });
