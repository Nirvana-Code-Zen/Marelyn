const initializeAppResponse = {
  connextion: true
}

jest.mock('./src/env', () => ({}))
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => initializeAppResponse)
}))

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn()
}))

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn()
}))

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  getFirestore: jest.fn()
}))

jest.mock('firebase/auth', () => ({
  GoogleAuthProvider: jest.fn(),
  FacebookAuthProvider: jest.fn(),
  getAuth: jest.fn(),
  signInWithPopup: jest.fn().mockReturnValue({})
}))
