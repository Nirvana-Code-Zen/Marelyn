export type User = {
    userName: string
    name: string
    email: string
    profilePhoto: string
}

export function User({ userName, name, email, profilePhoto }: User) {
  return {
    userName,
    name,
    email,
    profilePhoto
  }
}