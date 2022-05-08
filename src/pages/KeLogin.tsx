import { useEffect, useState } from "react";
import KeLayout from "../components/LayoutKe";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { loginUser } from "../plugins/firebase";
import { useLoginCheck } from "../hooks/useLoginCheck";

const KeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isLogin = useLoginCheck();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/kechat");
    }
  }, [isLogin, navigate]);

  const login = (email: string, password: string) => {
    refleshErrorMessage();

    if (email === "" || password === "") {
      setErrorMessage("メールアドレスとパスワードは必須です");
      return;
    }
    loginUser(email, password);
  };

  const refleshErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <KeLayout>
      <h1>Welcome to Keisuke's Chat Page</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <FormControl>
          <InputLabel htmlFor="email">メールアドレス</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <InputLabel htmlFor="password">パスワード</InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          login(email, password);
        }}
      >
        ログイン
      </Button>
    </KeLayout>
  );
};

export default KeLogin;
