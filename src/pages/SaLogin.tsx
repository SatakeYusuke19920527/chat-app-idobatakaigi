import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginUser, createUser, googleLogin, resetPassword } from "../plugins/firebase"
import { useLoginCheck } from '../hooks/useLoginCheck';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useRTK';
import SaModal from '../components/SaModal';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://proaca.com">
        ProAca
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SaLogin() {
  const [isCreateUser, setIsCreateUser] = useState<boolean>(false)
  const isLogin = useLoginCheck()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate('/sachat');
    }
  }, [isLogin, navigate]);

  const handleSignInOrCreateUser = async () => {
    console.log("🚀 ~ file: SaLogin.tsx ~ line 34 ~ SaLogin ~ name", name)
    console.log("🚀 ~ file: SaLogin.tsx ~ line 35 ~ SaLogin ~ email", email)
    console.log("🚀 ~ file: SaLogin.tsx ~ line 37 ~ SaLogin ~ password", password)

    if (isCreateUser) {
      if (name === "" || email === "" || password === "") return
      await createUser(name, email, password, dispatch)
    } else {
      if (email === "" || password === "") return
      await loginUser(email, password)
    }
  }

  const handleGoogleLogin = async () => {
    await googleLogin()
  }

  const resetPasswordByEmail = async (email: string) => {
    await resetPassword(email)
    window.alert("メールを送信しました。")
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {
                isCreateUser ?
                  "Create User"
                  :
                  "Sign Up"
              }
            </Typography>
            {
              isCreateUser ? (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    onChange={e => setName(e.target.value)}
                    autoFocus
                  />
                </>
              ) : null
            }
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSignInOrCreateUser}
              sx={{ mt: 3, mb: 2 }}
            >
              {
                isCreateUser ?
                  "Create User"
                  :
                  "Sign Up"
              }
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={handleGoogleLogin}
              sx={{ mt: 2, mb: 2 }}
            >
              Google Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">
                  <SaModal title="Forgot password?" resetPasswordByEmail={resetPasswordByEmail} />
                </Link>
              </Grid>
              <Grid item sx={{ cursor: "pointer" }}>
                <Link onClick={() => setIsCreateUser(!isCreateUser)} variant="body2">
                  {
                    isCreateUser ?
                      "Sign Up"
                      :
                      "Create User"
                  }
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}