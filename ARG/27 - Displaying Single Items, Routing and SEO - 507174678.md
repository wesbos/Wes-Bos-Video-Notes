## 27 - Displaying Single Items, Routing and SEO

If you experience an issue with the `query` prop being *undefined* in the Single Product Page `[id].js` file, the issue can be caused by an incorrect `pageProps` variable in the `_app.js` file, especially the return value which should be `return { pageProps };` (note the usage of an object as the return value).

[GitHub - Stepped Solution](https://github.com/wesbos/Advanced-React/blob/master/stepped-solutions/20/_app.js#L29)

```jsx:title=pages/_app.js {2,10}
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

export default withData(MyApp);
```
