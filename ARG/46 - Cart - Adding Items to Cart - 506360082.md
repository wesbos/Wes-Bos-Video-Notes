# Cart - Adding Items to Cart

The extendGraphqlSchema was added in an earlier video, you should already have it, but if you don't, it now looks like this:

```js
extendGraphqlSchema: (schema) => addCompatibilityForQueries(extendGraphqlSchema(schema)),
```

----
At 21:55, the keystone resolveField solution should be resolveFields which is actually deprecated now and therefore a little trickier to find in the API
```js
resolveFields: 'id, quantity',
```
