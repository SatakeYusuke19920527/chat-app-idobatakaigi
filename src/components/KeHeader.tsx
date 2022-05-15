import { Button } from "@mui/material";
import { useLoginCheck } from "../hooks/useLoginCheck";
import { logoutUser } from "../plugins/firebase";
import "../styles/KeHeader.css";

const KeHeader = () => {
  const isLogin: boolean = useLoginCheck();

  return (
    <header className="header">
      <div className="title">KeChat</div>
      {isLogin && (
        <div className="sign-out-button">
          <Button
            variant="text"
            size="small"
            sx={{ color: "white" }}
            onClick={() => {
              logoutUser();
            }}
          >
            サインアウト
          </Button>
        </div>
      )}
    </header>
  );
};

export default KeHeader;
