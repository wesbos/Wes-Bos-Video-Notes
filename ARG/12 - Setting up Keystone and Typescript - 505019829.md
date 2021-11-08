# Setting up Keystone and Typescript

To fix the Keystone development error `Error: Cannot find module 'keystone'`, please check that you created the `keystone.ts` file in the root of the *backend* folder and _not_ in a sub-folder such as `seed-data`. Keystone can't detect the file if you create the `keystone.ts` file in a sub-folder.

If you haven't created the `keystone.ts` file yet then that will cause the error as well as Keystone cannot start without a valid `keystone.ts` file.

[GitHub Stepped Solutions](https://github.com/wesbos/Advanced-React/blob/master/finished-application/backend/keystone.ts)
