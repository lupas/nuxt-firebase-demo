const functions = require('firebase-functions');

exports.testFunction = functions.https.onCall(() => {
  console.log("Test Function triggered")
  return { message: "Yeaaahh it's working!" }
})
