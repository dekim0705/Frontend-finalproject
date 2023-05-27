import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
