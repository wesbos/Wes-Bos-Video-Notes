# Cart - Adding Items to Cart

The extendGraphqlSchema was added in an earlier video, you should already have it, but if you don't, it now looks like this:

```js
extendGraphqlSchema: (schema) => addCompatibilityForQueries(extendGraphqlSchema(schema)),
```
