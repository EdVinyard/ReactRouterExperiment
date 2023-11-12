import { useMatch, NavLink, Route } from 'react-router-dom';

/**
 * A collection of "sub-pages"  to viewing and
 * editing a user profile, starting at a common path.
 * Think of this like https://github.com/settings/.
 */
export function Profile() {
    const { path } = useMatch();
    const credsPath = `${path}/credentials`;
    const prefsPath = `${path}/preferences`;
    return (
        <div>
            <nav>
                <NavLink to={credsPath}>Credentials</NavLink>
                <NavLink to={prefsPath}>Preferences</NavLink>
            </nav>
            <h1>Profile</h1>
            <p>
                Profile sub-pages begin at {path}.
            </p>
            <Route exact path={credsPath}><Credentials /></Route>
            <Route exact path={prefsPath}><Preferences /></Route>
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
