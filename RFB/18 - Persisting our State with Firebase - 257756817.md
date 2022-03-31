# Persisting our State with Firebase

If you don't have a `databaseURL` in your Firebase SDK config then you likely skipped the step where you had to create a `Realtime Database`. If you go and create a `Realtime Database` and then go back to the Firebase config webpage the config should then have a `databaseURL`.

If you get any `@firebase/database: FIREBASE WARNING` warnings in the Browser Console that refers to `permission_denied` then you either accidentally created a `Firestore Database` instead of a `Realtime Database` or you forgot the steps to configure the Firebase `rules` for the `Realtime Database`. The database you need to configure for the course is the `Realtime Database`.

Also note, the Firebase imports have been updated since the recording of the course.

You can use these imports in the `base.js` file.

```js {1,5}
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
  authDomain: "catch-of-the-day-wes-bos-2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
```
