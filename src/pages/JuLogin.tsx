import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const JuLogin = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Layout>
      <h1>JuLogin</h1>
      <p onClick={() => movePage('juchat')}>Junta's chat Page</p>
    </Layout>
  );
};

export default JuLogin;
