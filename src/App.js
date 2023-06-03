import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MembershipPage from './pages/MembershipPage';
import WritePage from './pages/WritePage';
import PinViewPage from './pages/PinViewPage';

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
          <Route path='/membership' element={<MembershipPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path='/view' element={<PinViewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
