import Avatar from '@mui/material/Avatar';
import Gravatar from 'react-gravatar'

import "../styles/MessageCard.css"
const MessageCard = ({ name, message, photoUrl }: { name: string, message: string, photoUrl: string }) => {
  const handleClick = () => {
    console.log("🚀 ~ file: MessageCard.js ~ line 5 ~ MessageCard ~ name", name)
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
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageCard