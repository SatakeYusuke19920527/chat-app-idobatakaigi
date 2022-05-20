import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../plugins/firebase';

const UtLogin = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };

  const handleLogin = () => {
    console.log('ログインボタン押下')
    if(email && password) loginUser(email, password)
    movePage('utchat')
  }

  return (
    <Layout>
      <h1>UtLogin</h1>
      <div>
        <TextField
          fullWidth
          id="username"
          type="email"
          label="Username"
          placeholder="email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
      >
        ログイン
      </Button>
    </Layout>
  );
};

export default UtLogin;
