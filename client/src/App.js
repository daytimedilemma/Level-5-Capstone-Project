import React from "react"
import Home from "./components/Home.js"
import CustodialParentView from "./components/CustodialParentView.js"
import NonCustodialParentView from "./components/NonCustodialParentView.js"
import "./style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <nav className="navbar">

            <Link to="/"  >
              Home
            </Link>

            <Link to="noncustodialparentview"  >
              Non-Custodial Parent
            </Link>

            <Link to="custodialparentview"  >
              Custodial Parent
            </Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="custodialparentview" element={<CustodialParentView />} />
          <Route path="noncustodialparentview" element={<NonCustodialParentView />} />

        </Routes>
      </Router>
    </div>
  )
};

export default App;