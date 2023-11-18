export const GoogleAuthProvider = jest.fn()
export const  FacebookAuthProvider = jest.fn()
export const getAuth = jest.fn()

export const createUserWithEmailAndPassword = jest.fn().mockResolvedValue(true)

export const signInWithPopup = jest.fn().mockReturnValue({
  user: {
    displayName: 'Jhon Doe',
    email: 'jhon@doe.com'
  }
})