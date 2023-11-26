import type { AuthProviders, accountType } from './repository'

export type User = {
    uid: string
    userName: string
    name: string
    email: string
    profilePhoto: string
    accountType: accountType.client | accountType.admin
    authMethod: AuthProviders.Facebook | AuthProviders.Google | AuthProviders.Email | AuthProviders.Phone
}

export function User({ uid, userName, name, email, profilePhoto, authMethod, accountType }: User) {
  return {
    uid,
    userName,
    name,
    email,
    profilePhoto,
    authMethod,
    accountType
  }
}
