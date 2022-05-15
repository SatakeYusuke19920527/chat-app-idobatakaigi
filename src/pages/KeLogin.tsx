import { useEffect, useState } from "react";
import KeLayout from "../components/LayoutKe";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { loginUserKe } from "../plugins/firebase";
import { useLoginCheck } from "../hooks/useLoginCheck";
import "../styles/KeLogin.css";
import KeHeader from "../components/KeHeader";

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

  const login = async (email: string, password: string) => {
    refleshErrorMessage();

    if (email === "" || password === "") {
      setErrorMessage("メールアドレスとパスワードは必須です");
      return;
    }
    setErrorMessage(await loginUserKe(email, password));
  };

  const refleshErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <KeLayout>
      <KeHeader />
      <section className="login-wrapper">
        <div className="root">
          <div className="title">
            <h1>WELCOME</h1>
          </div>
          <div>
            <h5>-Keisuke's Chat Page- </h5>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="item">
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
          <div className="item">
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
          <div className="item">
            <Button
              variant="contained"
              onClick={() => {
                login(email, password);
              }}
            >
              ログイン
            </Button>
          </div>
        </div>
      </section>
    </KeLayout>
  );
};

export default KeLogin;
