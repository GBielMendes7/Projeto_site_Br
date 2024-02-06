import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import History from './site/history/history.js';
import Table from './site/Table/table.js';
import Home from './site/home/home.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Tabela' element={<Table />} />
          <Route path='/Historia' element={<History />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
