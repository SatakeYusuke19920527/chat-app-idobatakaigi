import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Layout from '../components/Layout'
import { logoutUser } from '../plugins/firebase'
import { selectUser } from '../features/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import { db, createDataInFirebase } from '../plugins/firebase';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import MessageCard from '../components/MessageCard';
import "../styles/SaChat.css"

const SaChat = () => {
  const user: UserType = useAppSelector(selectUser);
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState<any[]>([])
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesInfo: any[] = [];
      querySnapshot.forEach((doc) => {
        messagesInfo.push(doc.data());
      });
      setChatData(messagesInfo)
    });
    return unsubscribe
  }, []);
  useLayoutEffect(() => {
    scrollBottomRef.current!.scrollIntoView({ behavior: 'smooth' });
  }, [chatData])
  useEffect(() => {
    if (user.displayName === null) {

    }
  }, [user])
  const sendMessage = async () => {
    await createDataInFirebase(user.displayName, message, user.photoUrl)
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
          <div
            className="show-message-area"
          >
            {
              chatData.map((chat, index) => {
                return (
                  <MessageCard
                    key={index}
                    name={chat.name}
                    photoUrl={chat.photoUrl}
                    message={chat.message}
                  />
                )
              })
            }
            <div ref={scrollBottomRef}></div>
          </div>
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