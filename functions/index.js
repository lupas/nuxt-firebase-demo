const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const messaging = admin.messaging()

exports.testFunction = functions.https.onCall(() => {
  console.info('Test Function triggered')
  return { message: "Yeaaahh it's working!" }
})

exports.sendTestPushMessage = functions.https.onCall(async (data) => {
  const message = {
    data: {
      type: 'testPushMessage',
      title: `Test Push Message`,
      iconPath: "https://avatars2.githubusercontent.com/u/4020037?s=460&u=c5f9c131d565202d8e530295b130239edd25768d&v=4",
      message: "If you get this, it worked.",
      senderUsername: "NuxtFirebase",
      clickPath: `https://firebase.nuxtjs.com`
    },
    token: data.token
  }
  try {
    await messaging.send(message)
  } catch (e) {
    console.error(`Did not work to send a message to token ${message.token}`)
  }
})
