import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const UtLogin = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Layout>
      <h1>UtLogin</h1>
      <p onClick={() => movePage('utchat')}>Utoken's chat Page</p>
    </Layout>
  );
};

export default UtLogin;
