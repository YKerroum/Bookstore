import React from 'react';
import './App.css';
import {
  Link, NavLink, Routes, Route,
} from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="logo" path="/">Bookstore CMS</Link>
      <ul className="nav-links">
        <li>
          <NavLink path="/">Books</NavLink>
        </li>
        <li>
          <NavLink path="/categories">Categories</NavLink>
        </li>
      </ul>
      <button type="button" className="login-button">
        <IconContext.Provider value={{ color: '#0290ff', className: 'login-icon' }}>
          <BsFillPersonFill />
        </IconContext.Provider>
      </button>

    </nav>

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
