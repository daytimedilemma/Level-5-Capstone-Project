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
          <ul>

            <Link to="/"  >
              <li>Home</li>
            </Link>

            <Link to="noncustodialparentview"  >
              <li>NonCustodial Parent View</li>
            </Link>

            <Link to="custodialparentview"  >
              <li>Custodial Parent View</li>
            </Link>

          </ul>
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