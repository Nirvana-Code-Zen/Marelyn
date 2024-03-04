import { Auth, User } from 'firebase/auth'

export interface AuthResponse {
  accessToken?: string
  user?: User
}

export interface Strategy {
  execute(auth: Auth): Promise<AuthResponse>
}
