import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import env from '../env'

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGIN_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
  }

  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}

export default initFirebase
