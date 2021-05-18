import { useState } from 'react';
import './styles/App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Header from './components/Header';
import Characters from './components/Characters';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "text-dark"

  return (
    <>
      <div className={`App ${bg}`}>
        <Header
          darkMode={darkMode}
          onClick={() => setDarkMode(!darkMode)}
        />
        <Characters />
      </div>
    </>
  );
}

export default App;
