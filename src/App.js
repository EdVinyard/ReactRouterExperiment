import './App.css';
import { Route, NavLink } from 'react-router-dom/cjs/react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';

function App() {
    return (
        <div className="App">
            <header>
                <nav class="toplevel">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/widgets">Widgets</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </nav>
            </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/widgets" component={Widgets} />
            <Route path="/profile"
                render={({ history, location, match }) =>
                    <Profile rootPath={match.path} />
                }
                />
        </div>
    );
}

function Widgets() {
    return (
        <div>
            <h1>Widgets</h1>
            <p>
                If this were a real application,
                there'd be some widgets here.
            </p>
        </div>
    );
}


export default App;
