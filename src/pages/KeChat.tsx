import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LayoutKe from "../components/LayoutKe";
import { logoutUser } from "../plugins/firebase";

const KeChat = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  const signOut = () => {
    logoutUser();
    movePage("kelogin");
  };
  return (
    <LayoutKe>
      <h1>KeChat</h1>
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
