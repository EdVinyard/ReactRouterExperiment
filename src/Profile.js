import { Route, NavLink } from 'react-router-dom/cjs/react-router-dom';

/**
 * A collection of "sub-pages" dedicated to viewing and
 * editing a user profile, starting at a common path.
 * Think of this like https://github.com/settings/.
 */
export function Profile({ rootPath }) {
    console.log(rootPath);
    const credentialsPath = `${rootPath}/credentials`;
    const preferencesPath = `${rootPath}/preferences`;
    return (
        <div>
            <nav>
                <NavLink to={credentialsPath}>Credentials</NavLink>
                <NavLink to={preferencesPath}>Preferences</NavLink>
            </nav>
            <h1>Profile</h1>
            <p>
                Profile sub-pages begin at {rootPath}.
            </p>
            <Route exact path={credentialsPath} component={Credentials} />
            <Route exact path={preferencesPath} component={Preferences} />
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
