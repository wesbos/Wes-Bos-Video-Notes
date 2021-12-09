<!--
  ~/Advanced-React is what we code in the videos
  ~/Sites/advanced-react/github-starter-files is starter files
-->
# Keystone 6 Upgrade

This course was recorded with a beta version of Keystone, since Keystone 6 has now launched in stable, there are a few minor updates to the app to get it working with the latest.

The largest difference is that Keystone 6 now uses Prisma under the hood. Prisma is an "ORM", which provides a set of APIs to interface with the database of your choice. It works really well with GraphQL and TypeScript! This mostly doesn't matter to us, but there are a few API changes like `{ name_contains_i: $searchTerm }` is now `{ name: { contains: $searchTerm } }`

## Starter file Updates

If you already have the files on your computer, go ahead and switch these out:

1. `package.json` needs to be updated with the one on github.
  * Delete `.keystone` and `node_modules` folder, along with the `package-lock.json` file
  * after you update `package.json`, run a `npm install` on the `backend` directory
1. `.gitignore` needs `*.db` added
2. `tsconfig.json` has some options, grab the latest from the [GitHub Repo](https://github.com/wesbos/Advanced-React)
3. `/seed-data/index.ts` is updated, get whole new file
4. `types.ts` is updated - get the new file
5. `compat.ts` needs to be added

## Sitewide Imports
Find and Replace globally in your project

* `@keystone-next/fields` → `@keystone-6/core/fields`
* `from '@keystone-next/keystone/schema'` → `from '@keystone-6/core'`
* `@keystone-next/cloudinary` → `@keystone-6/cloudinary`
* `@keystone-next/auth` → `@keystone-6/auth`
* `@keystone-next/keystone/session` → `@keystone-6/core/session`
* `import { KeystoneContext, SessionStore } from '@keystone-next/types';` → `import { KeystoneContext} from '@keystone-6/core/types';`
* `id: session.itemId` →  `id: { equals: session!.itemId }`
* `read: ` → `query: ` (keep the spaces in this one!)
* `text({ isRequired: true })` >> `text({ validation: { isRequired: true } })`

## `keystone.ts` Setup File:
The setup of this file has been re-recorded, but here are the steps to update your existing keystone:

1. Delete the createSchema import and delete where it wraps the `lists:` property.
1. Update the database url. If you have any DATABASE_URL in your `.env` file, delete it.
```js
  const databaseURL = process.env.DATABASE_URL || 'file:./app.db'
```

1. `adapter: 'mongoose',` is now `'provider': 'sqlite',`
1. `extendGraphqlSchema` is now like below. Make sure to import the `addCompatibilityForQueries` function.

```js
// At the top of keystone.ts
import { addCompatibilityForQueries } from './compat';
// ... then lower down:
extendGraphqlSchema: (schema) => addCompatibilityForQueries(extendGraphqlSchema(schema)),
```

1. the `onConnect` method for seeding data, replaced `keystone` param with `context` and passes `context.prisma`

```diff
- async onConnect(context) {
+ async onConnect(context) {
  console.log('Connected to the database!');
  if (process.argv.includes('--seed-data')) {
-    await insertSeedData(keystone);
+    await insertSeedData(context.prisma);
  }
},
```

3. Delete `withItemData` import and delete where it wrapped wrapped statelessSessions. Delete the second argument and move that to createAuth:

```js
// ...
// begin-highlight
sessionData: `id name email role { ${permissionsList.join(' ')} }`,
// end-highlight
passwordResetLink: {
// ...
```

## Access Control Updates

Each of our schemas needs some slight updates to how access control works.

`access` was previously `read`, `write`, `update`, `delete`. They are now split into:

`access.operation` for Clear yes/no allowances.

`access.filter` for filtering which items someone should have access to.

#### schemas/CartItem.ts

```ts
operation: {
  create: isSignedIn,
},
filter: {
  query: rules.canOrder,
  update: rules.canOrder,
  delete: rules.canOrder,
},
```

#### schemas/Order.ts
```ts
operation: {
  create: isSignedIn,
  update: () => false,
  delete: () => false,
},
filter: {
  query: rules.canOrder,
},
```

#### schemas/OrderItem.ts

```ts
operation: {
  create: isSignedIn,
  update: () => false,
  delete: () => false,
},
filter: {
  query: rules.canManageOrderItems,
},
```

#### schemas/Product.ts

```ts
operation: {
  create: isSignedIn,
},
filter: {
  query: rules.canReadProducts,
  update: rules.canManageProducts,
  delete: rules.canManageProducts,
},
```

#### schemas/ProductImage.ts

```ts
operation: {
  create: isSignedIn,
  query: () => true,
  update: permissions.canManageProducts,
  delete: permissions.canManageProducts,
},
```

#### schemas/Role.ts

```ts
operation: {
  create: permissions.canManageRoles,
  query: permissions.canManageRoles,
  update: permissions.canManageRoles,
  delete: permissions.canManageRoles,
},
```

#### schemas/User.ts

```ts
operation: {
  create: () => true,
  // only people with the permission can delete themselves!
  // You can't delete yourself
  delete: permissions.canManageUsers,
},
filter: {
  query: rules.canManageUsers,
  update: rules.canManageUsers,
},
```

## Data Types
`isRequired` is now under a validation object - this was part of our find/replace.

`isIndexed: unique` now added to `User` email field:

```js
email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
```

## Custom Virtual Fields are now different
In your Order.ts model, it looks like this now. Make sure to import `graphql`

```js
// at the top:
import { list, graphql } from '@keystone-6/core';
// then later down
fields: {
// highlight-start
  label: virtual({
    field: graphql.field({
      type: graphql.String,
      resolve(item) {
        return `${formatMoney(item.total)}`;
      },
    }),
  }),
// highlight-end
  total: integer(),
  items: relationship({ ref: 'OrderItem.order', many: true }),
  user: relationship({ ref: 'User.orders' }),
  charge: text(),
},
```

## addToCart.ts and checkout.ts
These have a handful of smaller changes. You can view the diff on github, or just grab the latest. The whole video for these are re-recorded.

## Start It Up!

That should be it. run `npm run dev`

Open it in your browser.


## Database Switch

Since we switched from Mongodb, over the sqlite, you will need to repopulate your data. run `npm run dev -- --seed-data` to populate all the seed data.

A great app for visualizing your data is Table Plus.

## Frontend

Most of the frontend is unaffected. Just a few minor updates.

### Search.js:

```diff
- { name_contains_i: $searchTerm }
- { description_contains_i: $searchTerm }
+ { name: { contains: $searchTerm } }
+ { description: { contains: { $searchTerm }} }
```

There is also an issue with useLazyQuery right now, this will fix it:

```js
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}
// then wrap Search

<ClientOnly><Search/></ClientOnly>
```

## Signin.js

`UserAuthenticationWithPasswordFailure`  no longer returns a `code`, remove it.

```diff
... on UserAuthenticationWithPasswordFailure {
-  code
  message
}
```


Unrelated, but we took the chance to upgrade Next.js. The updates here are:

1. Delete `.next`, `node_modules` and `package-lock.json`
2. Get the new `package.json` from github for the `frontend` folder.
3. Create a new file called `next.config.js` and use this config:

```js
module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
```

<!--
## Wes:
2. Record a single update video
3. Update each video
4. Update each stepped solution
 -->
