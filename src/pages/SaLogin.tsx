import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const SaLogin = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Layout>
      <h1>SaLogin</h1>
      <p onClick={() => movePage('sachat')}>Satake's chat Page</p>
    </Layout>
  );
};

export default SaLogin;
