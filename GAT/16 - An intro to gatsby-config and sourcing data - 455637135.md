# An intro to gatsby-config and sourcing data

If you get an error that says `We encountered an error while trying to load your site's gatsby-config. Please fix the error and try again. SyntaxError: Cannot use import statement outside a module` then you need to make sure that you are using the npm scripts `npm run develop` or `npm run start` to start the Gatsby server. You cannot use the global `gatsby develop` or `gatsby start` commands as we use ESM Modules in the course and Gatsby doesn't support it yet.

The `package.json` file provided in the Gatsby starter files contains a npm package named `esm` that allows us to use ESM Modules in the Gatsby config files.

[GitHub Starter Files](https://github.com/wesbos/master-gatsby/blob/master/starter-files/gatsby/package.json#L8)
