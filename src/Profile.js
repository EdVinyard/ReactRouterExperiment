import { NavLink, Route, Routes } from 'react-router-dom';

/**
 * A collection of "sub-pages" for viewing and
 * editing a user profile, starting at a common path.
 * Think of this like https://github.com/settings/.
 */
export function Profile() {
    // In React Router v6, all the links and routes are *relative*
    // to the current location, so we can eliminate some of the
    // bookkeeping we had in here before.  To emphasize this, I
    // removed the hook entirely.
    return (
        <div>
            <nav>
                <NavLink to="credentials">Credentials</NavLink>
                <NavLink to="preferences">Preferences</NavLink>
            </nav>
            <h1>Profile</h1>
            <p>
                Profile sub-pages begin at the path "mount point"
                determined by the host application.
            </p>
            <Routes>
                <Route path="credentials" element={<Credentials />} />
                <Route path="preferences" element={<Preferences />} />
            </Routes>
        </div>
    );
}

function Credentials() {
    return (
        <div>
            <h2>Credentials</h2>
            <p>reset your password or something</p>
        </div>
    );
}

function Preferences() {
    return (
        <div>
            <h2>Preferences</h2>
            <p>choose a theme or something</p>
        </div>
    );
}
