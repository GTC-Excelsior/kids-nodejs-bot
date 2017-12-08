const builder = require('botbuilder');

const lib = new builder.Library('demo');

lib.dialog('firstDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 3500);
})).triggerAction({ matches: /^demo script 1/i });

lib.dialog('secondDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 3500);
})).triggerAction({ matches: /^(I’m sorry to hear that. What kinds of things are they doing or saying|Are they bullying you|What did you do to them)/i });

lib.dialog('thirdDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 3500);
})).triggerAction({ matches: /^(Can I offer you some local resources that can offer free confidential counselling|Would you feel less alone if I told you that lots of people feel like that|That’s not a very healthy way to think.)/i });

lib.dialog('fourthDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 3500);
})).triggerAction({ matches: /^(Did you study|Which courses do you do well in|Don’t worry, you’ll do better next time)/i });

lib.dialog('fifthDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 7000);
})).triggerAction({ matches: /^(School is important, you should stick it out.|Why do you feel that way?|You have many options. What do you want for your future?)/i });

lib.dialog('sixthDialog', ((session) => {
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
  setTimeout(() => {
      session.send(msg);
  }, 3500);
  session.save();
})).triggerAction({ matches: /^(Maybe it was a mistake. Have you asked them?|It doesn’t mean that there is anything wrong with you|They don’t sound like a very good friend.)/i });

lib.dialog('finalDialog', ((session) => {
  var msg = `This concludes the interactive chat session.`;
  session.endConversation(msg);
})).triggerAction({ matches: /^(K. Bye.|Okay, what do you feel you are leaving with today?|It’s been great talking with you.)/i });

module.exports.createLibrary = function () {
  return lib.clone()
}
