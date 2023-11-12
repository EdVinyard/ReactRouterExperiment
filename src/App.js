import './App.css';
import { Route, NavLink } from 'react-router-dom';
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
            <Route exact path="/"><Home /></Route>
            <Route exact path="/widgets"><Widgets /></Route>
            <Route path="/profile"><Profile /></Route>
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
