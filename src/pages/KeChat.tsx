import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutKe from "../components/LayoutKe";
import { Message } from "../models/keChatModel";
import { db, logoutUser } from "../plugins/firebase";
import { addDoc, collection } from "firebase/firestore";

const KeChat = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  const signOut = () => {
    logoutUser();
    movePage("kelogin");
  };
  const send = async (content: string, createdBy: string) => {
    const createdAt = Date.now();
    const key = String(createdAt);
    const message: Message = {
      content: content,
      createdBy: createdBy,
      createdAt: createdAt,
    };
    addDoc(collection(db, key), message);
  };

  return (
    <LayoutKe>
      <h1>KeChat</h1>
      <Input
        id="content"
        type="content"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setContent(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          send(content, "keisuke");
        }}
      >
        送信
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          signOut();
        }}
      >
        サインアウト
      </Button>
    </LayoutKe>
  );
};

export default KeChat;
