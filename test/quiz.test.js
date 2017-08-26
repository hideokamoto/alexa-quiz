const conversation = require('alexa-conversation');
const app = require('../handler.js');

const opts = {
  name: 'English Teacher Test',
  appId: 'your-app-id',
  app: app,
  handler: app.hello
};

conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain("Hello. Which scene do you run?")
  .userSays('SenceIntent', {NameSlot: 'Hospital'})
  .plainResponse
  .shouldContain("you want to tell that you are cold.")
  .userSays('AnswerIntent')
  .plainResponse
  .shouldContain("sure. I'm worry about your healthy.")
  .end();