# React Experiments

## Goals

* Learn how to use React, Facebook's "new" view/rendering framework.
* Learn how to integrate Backbone with React, essentially replacing Backbone.View with React.
* Render a large table with Backbone + React, adding in some behaviours (TBC).

## Requirements

* node/npm
* git

## Installation and running these experiments

From your terminal/git bash console:

```sh
git clone git@github.com:ScottMaclure/react-experiments.git
cd react-experiments
npm install
npm start
```

And fire up <http://localhost:3000>

The index.html page has links to each experiment.

## Offline JSX compiling

All of the experiments use JSX, if making changes, you need to compile `src/` into `public/build/`.

You can use React's jsx program in watch mode:

```sh
node ./node_modules/react-tools/bin/jsx --watch src/ public/build/
```

## React Developer Tools for Google Chrome

Useful for debugging:

<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related>

## Generating mock json data

Check out the `scripts/` folder for some JSON generator programs. Typical use:

```
node scripts/usersTableDataGenerator.js  > public/data/users-table.json
```

## TODO

### general

* Find a nice solution for JSHint + JSX (https://github.com/CondeNast/JSXHint?) (dangerouslySetInnerHTML={{__html: rawMarkup}})
* Add Foundation v5 or Twitter bootstrap to the project, get things looking pretty. JS integration?
* Go through our components, and make use of propTypes (http://facebook.github.io/react/docs/component-specs.html)

### react-tutorial

* Consider Websocket for comment updates - socket.io mixin? - github.com/Enome/react.io
* Consider a FormErrors component, for nice display of error messages (Foundation Abide?)
* Consider pouchdb or simliar, for offline storage of comments.
* Add a date field to comments, perhaps invert render order

### react-table

* Code review on ReactTabe.js
* Add "delete row" support
* Add "delete row" support
* Implement "marionette-table" and "angular-table" for comparison! Within this repo is fine.

## Further Reading

http://blog.whn.se/post/69621609605/writing-good-react-components

http://www.reddit.com/r/javascript/comments/1oo1y8

https://github.com/usepropeller/react.backbone

http://eldar.djafarov.com/2013/11/reactjs-mixing-with-backbone/