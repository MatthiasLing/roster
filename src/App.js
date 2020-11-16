import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateUser from './components/create-user.component'
import EditUser from './components/edit-user.component'
import Home from './components/home.component'
import AllUsers from './components/see-all-user.component'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.youtube.com/watch?v=hh7Gu3MsGH8" target="_blank">
            <img src={logo} width="30" height="30" alt="MatthiasLing" />
          </a>

          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/create">Create</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/edit/3">Edit</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="/all">See All</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {onSubmit}>Search</button>
            </form>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/create" component={CreateUser} />
        <Route path="/all" component={AllUsers} />
      </div>
    </Router>

  );
}

export default App;
