import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(`${path}`);
  };
  return (
    <Layout>
      <h1>🗣 Welcome to IDOBATAKAIGI 🗣</h1>
      <div className="menu-area">
        <h2
          onClick={() => movePage('julogin')}
          className="individual-page-junta"
        >
          Junta's Page
        </h2>
        <hr />
        <h2
          onClick={() => movePage('utlogin')}
          className="individual-page-utoken"
        >
          Utoken's Page
        </h2>
        <hr />
        <h2
          onClick={() => movePage('kelogin')}
          className="individual-page-keisuke"
        >
          Keisuke's Page
        </h2>
        <hr />
        <h2
          onClick={() => movePage('salogin')}
          className="individual-page-satake"
        >
          Satake's Page
        </h2>
        <hr />
      </div>
    </Layout>
  );
};

export default Home;
