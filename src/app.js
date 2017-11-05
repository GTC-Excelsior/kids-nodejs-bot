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
    case "Do you have a safe place you can go?":
      scores.push(2);
    case "What did you do?":
      scores.push(0);
    case "Have you considered cutting him out of your life totally?":
      scores.push(1);
    case "Can I offer you some local resources that can offer free confidential counselling?":
      scores.push(2);
    case "Would you feel less alone if I told you that lots of people feel like that?":
      scores.push(0);
    case "That’s not a very healthy way to think.":
      scores.push(0);
    case "Try not to predict what’s going to happen in the future":
      scores.push(0);
    case "There is nothing you can do about some situations.":
      scores.push(0);
    case "Do you have family that could support you?  Here are some resources from your local  community that offers support.":
      scores.push(2);
    case "K. Bye.":
      scores.push(0);
    case "Okay, what do you feel you are leaving with today?":
      scores.push(2);
    case "It’s been great talking with you.":
      scores.push(0);
    case "Did you study?":
      scores.push(0);
    case "Which courses do you do well in":
      scores.push(2);
    case "Don’t worry, you’ll do better next time.":
      scores.push(1);
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
  	.text("I’ve been considering suicide. I feel very isolated 😭")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Can I offer you some local resources that can offer free confidential counselling?", "Can I offer you some local resources that can offer free confidential counselling?"),
  					builder.CardAction.imBack(session, "Would you feel less alone if I told you that lots of people feel like that?", "Would you feel less alone if I told you that lots of people feel like that?"),
            builder.CardAction.imBack(session, "That’s not a very healthy way to think.", "That’s not a very healthy way to think.")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(I’m sorry to hear that. What kinds of things are they doing or saying|Are they bullying you|What did you do to them)/i });

bot.dialog('thirdDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("Not only do they bully me all the time, but I also failed my math test. I can’t do anything right.")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Did you study?", "Did you study?"),
  					builder.CardAction.imBack(session, "Which courses do you do well in?", "Which courses do you do well in?"),
  					builder.CardAction.imBack(session, "Don’t worry, you’ll do better next time", "Don’t worry, you’ll do better next time")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(Can I offer you some local resources that can offer free confidential counselling|Would you feel less alone if I told you that lots of people feel like that|That’s not a very healthy way to think.)/i });

bot.dialog('fourthDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("I hate school.")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "School is important, you should stick it out.", "School is important, you should stick it out."),
  					builder.CardAction.imBack(session, "Why do you feel that way? Are there things/classes that you like?", "Why do you feel that way? Are there things/classes that you like?"),
  					builder.CardAction.imBack(session, "You have many options. What do you want for your future?", "You have many options. What do you want for your future?")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
}).triggerAction({ matches: /^(Did you study|Which courses do you do well in|Don’t worry, you’ll do better next time)/i });

bot.dialog('fifthDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("I really like studying history, but the bullying makes it so tough to enjoy school. This wouldn't be so difficult if one of my friends hadn't blocked me on InstaFaceChat")
  	.suggestedActions(
  		builder.SuggestedActions.create(
  				session, [
  					builder.CardAction.imBack(session, "Maybe it was a mistake. Have you asked them?", "Maybe it was a mistake. Have you asked them?"),
  					builder.CardAction.imBack(session, "It doesn’t mean that there is anything wrong with you.", "It doesn’t mean that there is anything wrong with you."),
  					builder.CardAction.imBack(session, "They don’t sound like a very good friend.", "They don’t sound like a very good friend.")
  				]
  			));
  setTimeout(function () {
      session.send(msg);
  }, 6000);
}).triggerAction({ matches: /^(School is important, you should stick it out.|Why do you feel that way?|You have many options. What do you want for your future?)/i });

bot.dialog('finalDialog', function (session) {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("I have to go, but I feel a bit better now. 🙌 Bye")
    .suggestedActions(
      builder.SuggestedActions.create(
          session, [
            builder.CardAction.imBack(session, "K. Bye.", "K. Bye."),
            builder.CardAction.imBack(session, "Okay, what do you feel you are leaving with today? ", "Okay, what do you feel you are leaving with today? "),
            builder.CardAction.imBack(session, "It’s been great talking with you.", "It’s been great talking with you.")
          ]
        ));
  setTimeout(function () {
      session.send(msg);
  }, 3500);
  session.save();
}).triggerAction({ matches: /^(Maybe it was a mistake. Have you asked them?|It doesn’t mean that there is anything wrong with you|They don’t sound like a very good friend.)/i });

module.exports = scores;
