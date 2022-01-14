

export default async function (session, firebase) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import(/* webpackChunkName: 'firebase-messaging' */'firebase/compat/messaging')

  if (firebase.messaging.isSupported()) {
    const messagingService = session.messaging()

    messagingService.getToken({vapidKey: "BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w"})

    return messagingService
  }
}
