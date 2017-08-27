var Alexa = require('alexa-sdk');

module.exports.hello = (event, context, callback) => {
  var alexa = Alexa.handler(event, context, callback);
  alexa.execute();
};