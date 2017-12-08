const builder = require('botbuilder');

const lib = new builder.Library('demo2');

lib.dialog('firstDialog', ((session) => {
  session.sendTyping();
  var msg = new builder.Message(session)
  	.text("Coming soon!")
    session.endConversation(msg);
})).triggerAction({ matches: /^demo script 2/i });

module.exports.createLibrary = function () {
  return lib.clone()
}
