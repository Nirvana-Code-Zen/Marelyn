import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import initFirebase from './init'

const initializeAppResponse = {
  connextion: true
}

jest.mock('../env', () => ({}))

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => initializeAppResponse)
}))

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn()
}))

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
})
