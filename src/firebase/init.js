import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyApy__67mZ-YEL9TosVzoXI7ICyyo42U4c',
    authDomain: 'marelyn-c5407.firebaseapp.com',
    projectId: 'marelyn-c5407',
    storageBucket: 'marelyn-c5407.appspot.com',
    messagingSenderId: '1083998552847',
    appId: '1:1083998552847:web:eb1bbcbb80cb4cd430347a',
    measurementId: 'G-DW4F6KMRKF'
  }

  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}

export default initFirebase
