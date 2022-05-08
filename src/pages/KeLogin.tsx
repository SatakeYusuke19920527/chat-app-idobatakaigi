import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const KeLogin = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Layout>
      <h1>KeLogin</h1>
      <p onClick={() => movePage('kechat')}>Keisuke's chat Page</p>
    </Layout>
  );
};

export default KeLogin;
