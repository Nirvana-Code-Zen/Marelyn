import type { AuthProviders, accountType } from "./repository"

export type User = {
    userName: string
    name: string
    email: string
    profilePhoto: string
    accountType: accountType.client | accountType.admin
    authMethod: AuthProviders.Facebook
}

export function User({ userName, name, email, profilePhoto, authMethod, accountType }: User) {
  return {
    userName,
    name,
    email,
    profilePhoto,
    authMethod,
    accountType
  }
}
