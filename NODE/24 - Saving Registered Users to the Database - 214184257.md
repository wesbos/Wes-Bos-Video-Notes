# Saving Registered Users to the Database

When using a later version of node and the project dependencies (e.g. node 19.4.0 and es6-promisify 7.0.0), promisify doesn't work exactly the same way as described in the video.

If you follow the instructions as recorded, first you'll see an error that promisify is not a function. Change the import of `const promisify = require('es6-promisify')` to `const { promisify } = ...`, and then you'll get a `TypeError` that reads `Right-hand side of 'instanceof' is not callable`.

Instead of using es6-promisify, you can now use the built-in `util` module in node to promisify similarly. When defining the promisify'd `register` function, the syntax varies slightly: `const register = promisify(User.register).bind(User);`

(Found [via an answer](https://stackoverflow.com/questions/59296349/create-register-typeerror-right-hand-side-of-instanceof-is-not-callable-expr) on Stack Overflow.)
