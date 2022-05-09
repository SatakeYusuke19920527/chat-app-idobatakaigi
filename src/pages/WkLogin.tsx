import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const WkLogin = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Layout>
      <h1>WkLogin</h1>
      <p onClick={() => movePage('wkchat')}>Kengo's chat Page</p>
    </Layout>
  );
};

export default WkLogin;
