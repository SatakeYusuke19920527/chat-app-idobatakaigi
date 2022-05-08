import { ReactNode, useEffect } from "react";
import { useLoginCheck } from "../hooks/useLoginCheck";
import { useNavigate } from "react-router-dom";
import "../styles/Layout.css";
const KeLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const isLogin = useLoginCheck();
  useEffect(() => {
    if (!isLogin) {
      navigate("/kelogin");
    }
  }, [isLogin, navigate]);
  return (
    <section className="layout-wrapper">
      <main>{children}</main>
    </section>
  );
};

export default KeLayout;
