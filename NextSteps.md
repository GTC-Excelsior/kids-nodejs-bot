# GTC Hack Day - 02 December 2017

## Next Steps

- Dashboard / scores / feedback to be integrated with Team tim h0rt0ns [Firebase](https://gift-the-code.firebaseapp.com/home)

#### Custom payload
  - Create custom payload containing score, selected answer, for Middleware to intercept. This eliminates need for Regex in `awardPoints()`.
  - UPDATE: This can't be accomplished with `imBack`. See:
    - https://github.com/Microsoft/BotBuilder/issues/3353
    - https://github.com/Microsoft/BotFramework-WebChat/issues/459 (WebChat embed)
    - https://www.npmjs.com/package/botframework-webchat-modified (WebChat embed)
    - Manually score in middleware (for now)

#### Manage in session state:
  - Object with UUID
    - Username??
    - Date/timestamp
    - Scores for current session
    - When final question is answered, post entire object as data/payload to web server api endpoint

#### Ability to handle multiple scripts
  - List for user to select scenario to run
    - See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt#promptschoice
  - Resources:
    - https://www.microsoft.com/developerblog/2017/01/21/orchestrating-multiple-bots-with-multilingual-support/
    - https://github.com/morsh/multilingual-uber-bot

#### Other actions
  - Chatbot & Express server need to be detached
  - Chatbot needs to be deployed somewhere, with chatbox ported to view
    - See https://github.com/Microsoft/BotFramework-WebChat/
