import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MembershipPage from './pages/MembershipPage';
import WritePage from './pages/WritePage';
import PinViewPage from './pages/PinViewPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import FestivalPage from './pages/FestivalPage'
import ContactPage from './pages/ContactPage'
import AdiminPage from './pages/AdminPage'
import ResetPwdPage from './pages/ResetPwdPage';
import FestivalDetailPage from './pages/FestivalDetailPage';
import KakaoCallback from './components/Login/KakaoCallback';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  .rti--container {
    --rti-bg: #fff;
    --rti-border: #eee;
    --rti-main: #FF62AD;
    --rti-radius: 4px;
    --rti-s: 0.5rem; 
    --rti-tag: #FFF8FA;
    --rti-tag-remove: #e53e3e;
  }
`;
function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/auth/kakao/callback' element={<KakaoCallback />} />
          <Route path='/password' element={<ResetPwdPage />} /> 
          <Route path='/membership' element={<MembershipPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path='/view' element={<PinViewPage />} />
          <Route path='/join' element={<JoinPage />} />
          <Route path='/mypage/*' element={<MyPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/festival' element={<FestivalPage />} />
          <Route path='/admin/*' element={<AdiminPage />} />
          <Route path='/festival/info' element={<FestivalDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
