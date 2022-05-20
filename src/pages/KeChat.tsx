import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import LayoutKe from "../components/LayoutKe";
import { Message } from "../models/keChatModel";
import { db } from "../plugins/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import "../styles/KeChat.css";
import KeHeader from "../components/KeHeader";
import KeMessage from "../components/KeMessage";

const messagesRef = "keChat";
const collectionId = "keChat";

const KeChat = () => {
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const messages = await fetchAllMessages();
      setMessages(messages);
    };
    fetch();
  }, [messages]);

  const send = async (content: string) => {
    const createdAt = Date.now();
    // TODO: ユーザ情報から取得する
    const createdBy = "Keisuke Watanabe";

    const message: Message = {
      content: content,
      createdBy: createdBy,
      createdAt: createdAt,
      isDeleted: false,
    };
    addDoc(collection(db, collectionId), message);
  };

  const fetchAllMessages = async () => {
    const q = query(
      collection(db, messagesRef),
      where("isDeleted", "==", false)
    );
    const querySnapshot = await getDocs(q);
    const messages: Message[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as Message;
      messages.push(data);
    });

    return messages.sort((a, b) => {
      if (a.createdAt > b.createdAt) return 1;
      if (a.createdAt < b.createdAt) return -1;
      return 0;
    });
  };

  const renderMessages = messages.map((message, index) => {
    return (
      <KeMessage
        key={index}
        createdBy={message.createdBy}
        content={message.content}
        createdAt={message.createdAt}
      ></KeMessage>
    );
  });

  return (
    <LayoutKe>
      <section>
        <KeHeader />
        <div className="chat-wrapper">
          <div className="message-area-wrapper">{renderMessages}</div>
          <div className="sender-area">
            <Input
              className="text-area"
              id="content"
              type="content"
              value={content}
              placeholder="メッセージを入力"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="success"
              disabled={content === ""}
              onClick={() => {
                send(content, "keisuke");
              }}
            >
              送信
            </Button>
          </div>
        </div>
        <footer></footer>
      </section>
    </LayoutKe>
  );
};

export default KeChat;
