function awardPoints(text) {
  switch(text) {
    case "I’m sorry to hear that. What kinds of things are they doing or saying?":
      scores.push(2);
      break;
    case "Are they bullying you?":
      scores.push(1);
      break;
    case "What did you do to them?":
      scores.push(0);
      break;
    case "Do you have a safe place you can go?":
      scores.push(2);
      break;
    case "What did you do?":
      scores.push(0);
      break;
    case "Have you considered cutting him out of your life totally?":
      scores.push(1);
      break;
    case "Can I offer you some local resources that can offer free confidential counselling?":
      scores.push(2);
      break;
    case "Would you feel less alone if I told you that lots of people feel like that?":
      scores.push(0);
      break;
    case "That’s not a very healthy way to think.":
      scores.push(0);
      break;
    case "Try not to predict what’s going to happen in the future":
      scores.push(0);
      break;
    case "There is nothing you can do about some situations.":
      scores.push(0);
      break;
    case "Do you have family that could support you?  Here are some resources from your local  community that offers support.":
      scores.push(2);
      break;
    case "K. Bye.":
      scores.push(0);
      break;
    case "Okay, what do you feel you are leaving with today?":
      scores.push(2);
      break;
    case "It’s been great talking with you.":
      scores.push(0);
      break;
    case "Did you study?":
      scores.push(0);
      break;
    case "Which courses do you do well in":
      scores.push(2);
      break;
    case "Don’t worry, you’ll do better next time.":
      scores.push(1);
      break;
    case "School is important, you should stick it out.":
      scores.push(0);
      break;
    case "Why do you feel that way? Are there things/classes that you like?":
      scores.push(2);
      break;
    case "You have many options. What do you want for your future?":
      scores.push(1);
      break;
    case "Maybe it was a mistake. Have you asked them?":
      scores.push(2);
      break;
    case "It doesn’t mean that there is anything wrong with you.":
      scores.push(1);
      break;
    case "They don’t sound like a very good friend.":
      scores.push(0);
      break;
    default:
      return;
  }
}

module.exports = awardPoints;
