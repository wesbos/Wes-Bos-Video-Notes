# Deploying to Netlify

If you get the following error message in the Netlify build console `No netlify.toml found. This is needed to configure the function settings.` then you need to check that your `netlify.toml` file is in the *root* of the Gatsby folder and not in a sub-folder such as the `functions` folder.

```toml:title=gatsby/netlify.toml
[build]
  functions = "functions/"
```

[GitHub Stepped Solutions](https://github.com/wesbos/master-gatsby/blob/master/finished-files/gatsby/netlify.toml)
