# Array Cardio - Instance Methods

// Small correction: For Array.splice(), Wes' solution showed...

toppingsCopy.splice(3, 5);

// It should be...

toppingsCopy.splice(3, 3);

// splice takes a starting point as the first argument, and **the number of items to delete as the second.**
// Wes' solution assumes the second argument is the ending point.

// Since the prompt was "take out items 3 to 5 of your new toppings array with splice()," the solution (assuming item 3 means index 3) should look like this...

(8) ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
0: "Mushrooms "
1: "Tomatoes"
2: "Eggs"
3: "Chiles"
4: "Bacon"
5: "Pickles"
6: "Onions"
7: "Cheese"
length: 8

// Wes, these videos are great and helping a non-CS grad like myself become great with JS, thank you! Looking forward to your TS course!
