import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ToysApp } from './pages/toy-app.jsx'
import { About } from './pages/about.jsx'
import { Home } from './pages/home.jsx'
import { ToyDetails } from './cmp/toy-details.jsx'
import { ToyEdit } from './cmp/toy-edit.jsx'
import { Login } from "./pages/login.jsx"
import { Signup } from "./pages/signup.jsx"
import routes from "./routes";
import { AppHeader } from "./cmp/app-header.jsx";


export function App() {
  return (
    <div className="app">
      <AppHeader />
      <Router>
        <header className="app-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/toys">Toys</Link>
          </nav>
        </header>
        <main>
          {/* <Switch>
          {routes.map((route) => {
            <Route
              path={route.path}
              exact
              key={route.path}
              component={route.component}
            />
          })} */}
          {/* {/* </Switch> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/toys" exact component={ToysApp} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/toys/:toyId?" exact component={ToyDetails} />
            <Route path="/toys/edit/:toyId?" exact component={ToyEdit} /> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}
