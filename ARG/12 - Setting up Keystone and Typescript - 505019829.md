# Setting up Keystone and Typescript

## Cannot find module keystone

To fix the Keystone development error `Error: Cannot find module 'keystone'`, please check that you created the `keystone.ts` file in the root of the *backend* folder and _not_ in a sub-folder such as `seed-data`. Keystone can't detect the file if you create the `keystone.ts` file in a sub-folder.

If you haven't created the `keystone.ts` file yet then that will cause the error as well as Keystone cannot start without a valid `keystone.ts` file.

[GitHub Stepped Solutions](https://github.com/wesbos/Advanced-React/blob/master/finished-application/backend/keystone.ts)

## Session secret must be at least 32 characters long

To fix the Keystone error `There was an error initialising Keystone. The session secret must be at least 32 characters long` you must open the `.env` file in the backend folder and replace the default provided `COOKIE_SECRET` value with a random string value that is 32 characters or longer.
