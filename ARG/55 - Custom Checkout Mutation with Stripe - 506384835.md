# Custom Checkout Mutation with Stripe

There are a few updates from this video, please make sure you have them as such or reference from the stepped solutions.

1. The function signature looks like this:

```ts
import { Context } from '.keystone/types';
import { Order } from '.prisma/client';

async function checkout(
  root: any,
  { token }: Arguments,
  context: Context
): Promise<Order> {
```

2. `context.lists` is now `context.query`, and resolveFields is now `query`

```ts {diff}
- const user = await context.lists.User.findOne({
+ const user = await context.query.User.findOne({
  where: { id: userId },
-  resolveFields: graphql``
+  query: graphql`
```





