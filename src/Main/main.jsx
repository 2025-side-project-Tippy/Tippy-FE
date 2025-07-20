import React from 'react';
import ReactDOM from 'react-dom/client';
import MyPage from '../MyPage/mypage'; // ✅ 올바른 경로

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyPage />
  </React.StrictMode>
);
