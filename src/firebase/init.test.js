import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import initFirebase from './init'

const initializeAppResponse = {
  connextion: true
}

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => initializeAppResponse)
}))

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn()
}))

describe('Firebase SDK', () => {
  test('Should connect to Firebase', () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyApy__67mZ-YEL9TosVzoXI7ICyyo42U4c',
      authDomain: 'marelyn-c5407.firebaseapp.com',
      projectId: 'marelyn-c5407',
      storageBucket: 'marelyn-c5407.appspot.com',
      messagingSenderId: '1083998552847',
      appId: '1:1083998552847:web:eb1bbcbb80cb4cd430347a',
      measurementId: 'G-DW4F6KMRKF'
    }

    initFirebase()

    expect(initializeApp).toHaveBeenCalledTimes(1)
    expect(initializeApp).toHaveBeenCalledWith(firebaseConfig)
  })

  test('Should connect to analytics', () => {
    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(getAnalytics).toHaveBeenCalledWith(initializeAppResponse)
  })
})
