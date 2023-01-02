import SignUpOptionsStyled, { SignUpHeader, SignUpTitle } from './indexStyled'
import Button from '../../Components/Button'

const SignUpOptions = () => {
  return (
    <SignUpOptionsStyled>
      <SignUpHeader>
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="currentColor"></path>
        </svg>
        <SignUpTitle>Registrate</SignUpTitle>
      </SignUpHeader>
      <Button onClick={() => {}} background='#2e89ff'>Registrate con Facebook</Button>
      <Button onClick={() => {}} background='#e84334'>Registrate con Google</Button>
      <Button onClick={() => {}}>Registrate con Email</Button>
    </SignUpOptionsStyled>
  )
}

export default SignUpOptions
