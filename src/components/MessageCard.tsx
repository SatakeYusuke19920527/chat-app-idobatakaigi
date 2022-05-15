import Avatar from '@mui/material/Avatar';
import { Timestamp } from 'firebase/firestore';
import Gravatar from 'react-gravatar'
import "../styles/MessageCard.css"
const MessageCard = ({ name, message, photoUrl, serverTime }: { name: string, message: string, photoUrl: string, serverTime: Timestamp }) => {
  const handleClick = () => {
    console.log("🚀 ~ file: MessageCard.js ~ line 5 ~ MessageCard ~ serverTime", serverTime)
  }
  return (
    <div className="messagecard-wrapper">
      <div className="content-area">
        <div
          className="icon-area"
          onClick={handleClick}
        >
          {
            photoUrl ?
              <Avatar alt={name} src={photoUrl} />
              : <Gravatar
                email={name}
                style={{ borderRadius: "25px" }}
                size={40}
                default="wavatar"
                className="CustomAvatar-image"
                protocol="https://"
              />
          }
        </div>
        <div className="message-area">
          <h4>{name}</h4>
          <div>
            <p>{message}</p>
            <p>{serverTime && serverTime.toDate().getMonth().toString()}月{serverTime && serverTime.toDate().getDate().toString()}日{serverTime && serverTime.toDate().getHours().toString()}時{serverTime && serverTime.toDate().getMinutes().toString()}分</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard