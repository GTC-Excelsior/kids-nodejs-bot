# kids-nodejs-bot

## Description
AssessmentBot is a chatbot designed to help Kids Help Phone quickly and effectively assess the performance of their counsellors. Currently assessment must be done by a human and therefore there is a delay in providing counsellors with vital feedback on how to improve their counselling techniques. Assessment also is currently only done on a random sampling basis, where AssessmentBot could be used daily.

AssessmentBot simulates a counselling session with a youth in need, using multiple choice answers which are each weighted with a different number of points. At the end of the session the counsellor is shown a graph of how they scored. Based on which questions were low scoring, counsellors will be provided with tips on how to improve those areas that need work.

Areas for improvement were determined using the information provided to us. The current lowest scoring areas were:
- strengths-based approach
- elicits the client’s preferred future
- engages in safety planning
- encourages the client to reflect on what they will take away from this session.

The questions the bot asks were designed to focus on those areas.

## Stack
AssessmentBot was built on the Microsoft Bot Framework to closely resemble the existing chat experience at Kids Help Phone, where counsellors use Skype for live chat interactions.
- Botbuilder
- Restify
- Express & EJS front-end with planned PostgreSQL implementation
- Chart.js
- Concurrently (could be replaced with Webpack)

## Screenshots
[![01_chatbot.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/01_chatbot_thumb.png)](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/01_chatbot.png) | [![02_graph.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/02_graph_thumb.png)](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/02_graph.png)  | [![03_recommendations.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/03_recommendations_thumb.png)](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/03_recommendations.png)
---|---|---
[01_chatbot.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/01_chatbot.png) | [02_graph.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/02_graph.png) | [03_recommendations.png](https://raw.githubusercontent.com/GTC-Excelsior/kids-nodejs-bot/master/docs/03_recommendations.png)

## Installation & Usage
1. Clone repository
2. Install dependencies using `npm i`
3. Download latest version of the [BotFramework-Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases)
3. Run app via `npm run dev`
4. Start BotFramework-Emulator program and enter endpoint URL of `http://localhost:3978/api/messages`
5. Type 'hello' in chat window to initiate conversation
6. View metrics for current session at http://localhost:8080 in browser

## Contributors
[![Val Heimpel](https://avatars0.githubusercontent.com/u/22244184?s=250&v=4)](https://github.com/vheimpel) | [![Chris Heimpel](https://avatars3.githubusercontent.com/u/2053489?s=250&v=4)](https://github.com/heimp)  | [![Meagan Blais](https://avatars1.githubusercontent.com/u/25989281?s=300&v=4)](https://github.com/MeaganBlais)
---|---|---
[Val Heimpel](https://github.com/vheimpel) | [Chris Heimpel](https://github.com/heimp) | [Meagan Blais](https://github.com/MeaganBlais)

[![Saj B.](https://avatars2.githubusercontent.com/u/15350256?s=250&v=4)](https://github.com/Sanju3001) | [![Ian Duke](https://avatars2.githubusercontent.com/u/16829276?v=4&s=250)](https://github.com/1andee) |
---|---
[Saj Bandaranayake](https://github.com/Sanju3001) | [Ian Duke](https://github.com/1andee)
