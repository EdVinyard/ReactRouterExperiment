import './App.css';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';

function App() {
    return (
        <div className="App">
            <header>
                <nav className="toplevel">
                    <NavLink end to="/">Home</NavLink>
                    <NavLink to="/widgets">Widgets</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/widgets" element={<Widgets />} />
                <Route path="/profile/*" element={<Profile />} />
            </Routes>
        </div>
    );
}

/**
 * This is a page in the "host" application; it could be anything.
 */
function Widgets() {
    const location = useLocation();
    console.log({ location });
    return (
        <div>
            <h1>Widgets</h1>
            <p>
                If this were a real application,
                there'd be some widgets here.
                You're viewing {location.pathname}.
            </p>
        </div>
    );
}

export default App;
