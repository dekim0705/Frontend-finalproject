import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MembershipPage from './pages/MembershipPage';
import WritePage from './pages/WritePage';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;
function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/membership' element={<MembershipPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
