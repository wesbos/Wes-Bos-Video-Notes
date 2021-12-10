# Creating our Order and OrderItems in our Mutation

A few small changes in this video:

1. In step 5, `context.lists` is now `context.db`:

```ts {diff}
- const order = await context.lists.Order.createOne({
+ const order = await context.db.Order.createOne({
```

2. In Step 6, `context.lists` is now `context.query`.

2. In Step 6, Cleanup now requires a `where` and an array of objects with an id:

```js {diff}
- ids: cartItemIds
+ where: cartItemIds.map((id: string) => ({ id }))
```
