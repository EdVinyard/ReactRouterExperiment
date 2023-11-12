# Relative Routes in React Router v5 vs v6

## Scenario

This repository compares the ability to create "relative" routes split up
between multiple files between React Router v5 and v6. It uses an imaginary web
application with the following Information Architecture (IA) outline:

- Home
  - Widgets
  - Profile
    - Preferences
    - Credentials

Two separate development teams are responsible for development:

1. The **Homepage Team** works on the homepage and Widget gallery. They're
responsible for the overall IA, so they want to be able to "mount" the
_Profile_ page (and sub-pages) at a path of their choosing and change it
whenever they want, without consulting the Profile Team.

1. The **Profile Team** works on the _Profile_ page and all its myriad
sub-pages (like [GitHub settings](https://github.com/settings/)). They don't
care at which path their pages are mounted, only that they have control over
the routes/paths "under" that root "mount point".

## Use

This repo contains separate branches for 
[v5](https://github.com/EdVinyard/ReactRouterExperiment/tree/v5) and 
[v6](https://github.com/EdVinyard/ReactRouterExperiment/tree/v6).  The main 
branch is useless.

On either branch, run

```sh
npm install && npm start
```

Or see the [original create-react-app docs](CRA-README.md).
