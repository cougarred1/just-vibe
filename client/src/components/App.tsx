import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// import in component files
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      {/* show NavBar in every view of app */}
      <NavBar />
      {/* routes to each view */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search-results/:query' element={<SearchResults />} />
        <Route path='/user' element={<Profile />} />
      </Routes>
    </div>
  )
};

export default App;
