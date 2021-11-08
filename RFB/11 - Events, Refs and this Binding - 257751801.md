# Events, Refs and this Binding

If you are experiencing issues with the property `value.value` being *_undefined_* then please follow this solution.

On each occurance where a React Ref is used as `value.value` in the course you need to replace it with `current.value`. The `starter files` for the course have been updated to use `React 16.6.3` which uses the new syntax but the course videos are still using the previous syntax.

[GitHub Stepped Solutions](https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/stepped-solutions/13/components/StorePicker.js#L11)

```jsx:title=src/components/StorePicker.js {5}
goToStore = event => {
  // 1. Stop the form from submitting
  event.preventDefault();
  // 2. get the text from that input
  const storeName = this.myInput.current.value;
  // 3. Change the page to /store/whatever-they-entered
  this.props.history.push(`/store/${storeName}`);
};
```
