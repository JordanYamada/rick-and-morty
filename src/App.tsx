// import { useState } from 'react'
import Header from './Nav';
import Home from './Home';
import Characters from './Characters';
import Docs from './Docs';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route
            path="/"
            element={<Home />}>
          </Route>

          <Route
            path="/characters"
            element={<Characters
            />}>
          </Route>

          <Route
            path="/docs"
            element={<Docs
            />}>
          </Route>

          <Route
            path="/characters"
            element={<Characters
            />}>
          </Route>

        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
