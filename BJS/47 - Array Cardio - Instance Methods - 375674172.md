# Array Cardio - Instance Methods

## Mistake at 9:07 - On exercise asking to use .splice() to remove items 3 through 5 of the array.
```toppingsCopy.splice(3,5)``` actually starts at index 3 and removes 5 items. If you want to take items 3 through 5 out you would just start at the 2nd index (because it is the 3rd item) and the second argument would be 3, to remove 3 items: ```toppingsCopy.splice(2,3)```
