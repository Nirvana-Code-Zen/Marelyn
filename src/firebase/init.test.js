import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

import initFirebase from './init'

const initializeAppResponse = {
  connextion: true
}

describe('Firebase SDK', () => {
  test('Should connect to Firebase', () => {
    const firebaseConfig = {
      apiKey: undefined,
      authDomain: undefined,
      projectId: undefined,
      storageBucket: undefined,
      messagingSenderId: undefined,
      appId: undefined,
      measurementId: undefined
    }

    initFirebase()

    expect(initializeApp).toHaveBeenCalledTimes(1)
    expect(initializeApp).toHaveBeenCalledWith(
      expect.objectContaining(firebaseConfig)
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
