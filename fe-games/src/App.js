import Header from './components/Header';
import SearchPage from './components/SearchPage';
import ReviewPage from './components/ReviewPage';
import SignInPage from './components/SignInPage';

import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [username, setUsername] = useState('DefaultUsername');

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/review/:review_id" element={<ReviewPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  
  // return (
  //     <div>
  //       <Header />
  //       <SearchPage />
  //       <ReviewPage />
  //       <SignInPage />
  //     </div>
  // );

}

export default App;
