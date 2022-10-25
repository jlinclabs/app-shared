import { useEffect } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import create from 'zustand'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import RedirectPage from './RedirectPage'
import { useSignup } from '../hooks/auth'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const useLoginDestination = create(set => ({
  destination: '/',
  setDestination(destination){
    set({ destination })
  }
}))

function useSetLoginDestinationOnMount(args = []) {
  const { destination, setDestination } = useLoginDestination()
  useEffect(
    () => {
      setDestination(location.toString().split(location.origin)[1])
    },
    args
  )
  return destination
}

export default function AuthPage({ component }) {
  const Component = component
  console.log({ Component })
  // return currentUser ? <LoggedIn/> : <LoggedOut/>
  return <Container
    sx={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
    }}
  >
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Component />
    </Container>
  </Container>
}

AuthPage.routes = props => {
  return props.currentUser ?
    <>
      <Route path="/login" element={<RedirectToLoginDestination/>} />
      <Route path="/login/eth" element={<RedirectToLoginDestination/>} />
      <Route path="/forgot-password" element={<RedirectToLoginDestination/>} />
      <Route path="/signup" element={<RedirectToLoginDestination/>} />
      <Route path="/signup/password" element={<RedirectToLoginDestination/>} />
      <Route path="/signup/wallet" element={<RedirectToLoginDestination/>} />
    </> :
    <>
      <Route path="/login" element={<AuthPage component={Login} />} />
      <Route path="/login/eth" element={<AuthPage component={LoginEth} />} />
      <Route path="/forgot-password" element={<AuthPage component={ForgotPassword} />} />
      <Route path="/signup" element={<AuthPage component={Signup} />} />
      <Route path="/signup/password" element={<AuthPage component={SignupWithPassword} />} />
      <Route path="/signup/wallet" element={<AuthPage component={SignupWithWallet} />} />
      <Route path="*" element={<AuthPage component={Main} />} />
    </>
}

export function RedirectToLoginDestination() {
  const {destination} = useLoginDestination()
  return <RedirectPage to={destination || '/'}/>
}

function Main(){
  const destination = useSetLoginDestinationOnMount()
  const query = (destination && destination !== '/')
    ? '?' + new URLSearchParams({ d: destination })
    : ''
  return <Stack
    divider={<Divider sx={{my: 3}}>OR</Divider>}
  >
    {/* {window.ethereum &&
      <Button
        variant="contained"
        to="/login/eth"
        query={{ d: destination }}
        component={Link}
      >Login with Ethereum</Button>
    } */}
    <Button
      variant="contained"
      component={Link}
      to={`/login${query}`}
    >Login</Button>

    <Button
      variant="contained"
      to={`/signup${query}`}
      component={Link}
    >Signup</Button>
  </Stack>
}

function Login(){
  return <Paper>
    <LoginForm sx={{p:2}}/>
  </Paper>
}

function LoginEth(){
  const navigate = useNavigate()

  return <Paper sx={{p:2}}>
    <Typography variant="h5">Logging in with Ethereum…</Typography>
    {/* <LoginWithEthereum _onConnect={() => { navigate('/') }} /> */}
  </Paper>
}

function Signup(){
  const signup = useSignup()
  const justTryIt = () => {
    signup.call({})
  }
  return <Box>
    <Typography variant="h4" mb={3}>Signup</Typography>
    <Stack spacing={2}>
      <Button
        variant="contained"
        onClick={justTryIt}
        disabled={signup.pending}
      >Just Try It!</Button>
      <ErrorMessage error={signup.error}/>
      <Button
        variant="contained"
        to="/signup/password"
        component={Link}
      >Email & Password</Button>
      <Button
        variant="contained"
        to="/signup/wallet"
        component={Link}
      >Crypto Wallet</Button>
      <Button
        variant="text"
        to="/"
        component={Link}
        size="small"
      >back</Button>
    </Stack>
  </Box>
}

function SignupWithPassword(){
  const navigate = useNavigate()
  return <SignupForm sx={{p:2}}/>
}

function SignupWithWallet(){
  return <Box>
    <Typography variant="h4" mb={3}>Signup with crypto wallet</Typography>
    <Typography variant="body1" mb={3}>coming soon…</Typography>
    <Link variant="text" to="/signup">back</Link>
  </Box>
}

function ForgotPassword(){
  return <div>forgot password form TBD</div>
}

