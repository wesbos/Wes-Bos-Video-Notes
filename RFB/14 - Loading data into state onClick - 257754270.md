# Loading data into state onClick

If you are experiencing issues with the property `value.value` being *_undefined_* then please follow this solution.

On each occurance where a React Ref is used as `value.value` in the course you need to replace it with `current.value`. The `starter files` for the course have been updated to use `React 16.6.3` which uses the new syntax but the course videos are still using the previous syntax.

[GitHub Stepped Solutions](https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/stepped-solutions/14/components/AddFishForm.js#L14)

```jsx:title=src/components/AddFishForm.js {6,7,8,9,10}
createFish = event => {
  // 1.  stop the form from submitting
  event.preventDefault();

  const fish = {
    name: this.nameRef.current.value,
    price: parseFloat(this.priceRef.current.value),
    status: this.statusRef.current.value,
    desc: this.descRef.current.value,
    image: this.imageRef.current.value
  };

  this.props.addFish(fish);
  // refresh the form

  event.currentTarget.reset();
};
```
