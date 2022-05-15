import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import KeLogin from '../pages/KeLogin';
import UtLogin from '../pages/UtLogin';
import JuLogin from '../pages/JuLogin';
import SaLogin from '../pages/SaLogin';
import WkLogin from '../pages/WkLogin';
import SaChat from '../pages/SaChat';
import JuChat from '../pages/JuChat';
import UtChat from '../pages/UtChat';
import KeChat from '../pages/KeChat';
import WkChat from '../pages/WkChat';
const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/julogin" element={<JuLogin />} />
        <Route path="/juchat" element={<JuChat />} />

        <Route path="/utlogin" element={<UtLogin />} />
        <Route path="/utchat" element={<UtChat />} />

        <Route path="/kelogin" element={<KeLogin />} />
        <Route path="/kechat" element={<KeChat />} />

        <Route path="/salogin" element={<SaLogin />} />
        <Route path="/sachat" element={<SaChat />} />

        <Route path="/wklogin" element={<WkLogin />} />
        <Route path="/wkchat" element={<WkChat />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
