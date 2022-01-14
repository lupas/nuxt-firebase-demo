import admin from 'firebase-admin'

const config = {"apiKey":"AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU","authDomain":"nuxt-fire-demo.firebaseapp.com","projectId":"nuxt-fire-demo","storageBucket":"nuxt-fire-demo.appspot.com","messagingSenderId":"807370470428","appId":"1:807370470428:web:26da98c86c3fd352","measurementId":"G-XT6PVC1D4X"}

const simulateUserRecord = ({
  uid,
  email,
  email_verified: emailVerified,
  name: displayName
}) => ({
  uid,
  email,
  emailVerified,
  displayName
})

if (!admin.apps.length) {
  admin.initializeApp(config)
}

export default async ({ req, res }) => {
  if (!req || !req.headers.authorization) {
    return
  }

  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || ''
  const components = authorizationHeader.split(' ')
  const idToken = components.length > 1 ? components[1] : ''

  try {
    // Try to verify the id token, additionally checking if the token was revoked
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken.uid) {
      const authUser = simulateUserRecord(decodedToken)

      res.locals = {
        ...res.locals,
        user: {
          ...authUser,
					allClaims: decodedToken,
					idToken,
        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}
