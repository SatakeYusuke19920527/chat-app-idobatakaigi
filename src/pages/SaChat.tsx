import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { logoutUser } from '../plugins/firebase'
import { selectUser } from '../features/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import { createDataInFirebase } from '../plugins/firebase';
import { useLoginCheck } from '../hooks/useLoginCheck';
import { useNavigate } from 'react-router-dom';
import "../styles/SaChat.css"

const SaChat = () => {
  const user: UserType = useAppSelector(selectUser);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const isLogin = useLoginCheck();
  useEffect(() => {
    if (!isLogin) {
      navigate('/salogin');
    }
  }, [isLogin, navigate]);
  const sendMessage = async () => {
    await createDataInFirebase(user.displayName, message)
    setMessage('')
  }
  return (
    <Layout>
      <section className="sc-wrapper">
        <header className="sc-header">
          <h1>🗣 Hello {user.displayName} 🗣</h1>
          <button
            onClick={logoutUser}
          >
            logout
          </button>
        </header>
        <main className="sc-main">
          <h1>message area</h1>
        </main>
        <footer className='sc-footer'>
          <div className="textfield-area">
            <TextField
              id="message"
              value={message}
              color="success"
              label="message"
              variant="standard"
              sx={{ width: '80vw' }}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="btn-area">
            <IconButton onClick={sendMessage} color="success" component="span">
              <Send />
            </IconButton>
          </div>
        </footer>
      </section>
    </Layout>
  )
}

export default SaChat