import { initFirebase } from '@modules/Shared/Firebase/init'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const initializeAppResponse = {
  connextion: true
}

describe('Firebase SDK', () => {
  test('Should connect to Firebase', () => {
    const firebaseConfig = {
      API_KEY: '',
      AUTH_DOMAIN: '',
      PROJECT_ID: '',
      STOREAGE_BUCKET: '',
      MESSAGIN_SENDER_ID: '',
      APP_ID: '',
      MEASUREMENT_ID: '',
      STORAGE_BUCKET: ''
    }

    const expected = {
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
      measurementId: ''
    }

    initFirebase(firebaseConfig)

    expect(initializeApp).toHaveBeenCalledTimes(1)
    expect(initializeApp).toHaveBeenCalledWith(
      expect.objectContaining(expected)
    )
  })

  test('Should connect to analytics', () => {
    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(getAnalytics).toHaveBeenCalledWith(initializeAppResponse)
  })

  test('Should connect to firestore', () => {
    expect(getFirestore).toHaveBeenCalledTimes(1)
    expect(getFirestore).toHaveBeenCalledWith(initializeAppResponse)
  })
})