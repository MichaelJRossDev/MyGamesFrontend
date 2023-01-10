import Header from './components/Header';
import SearchPage from './components/SearchPage';
import ReviewPage from './components/ReviewPage';
import SignInPage from './components/SignInPage';

import './App.css';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('DefaultUsername');

  return (
    <div>
      <Header />
      <SearchPage />
      <ReviewPage />
      <SignInPage />
    </div>
  );
}

export default App;
