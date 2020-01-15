# MediaZact Code Test

## CS Questions:

Every day a new frog is born weight 0grams and grows at a rate of 10grams/day, maxing out at 100grams in 10 days

On day n, what is the total weight of the frog community?

On day n, what is the average weight of the average frog?

How might we redesign the model to allow for new frogs to be born on a manually set schedule?

## JavaScript Questions:

Write a function appendRow that appends a table row to the table with ID "tbl". The appended row should have the same number of cells as the last row in that table. For example, after appending a row to the table below, the table should have 2 rows where each row has 2 cells.

```
<table id="tbl" border="1"> <tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
```

Write an addClickHandler function that registers a click handler and implements the following logic:
When a button with id "btn" is clicked, it disappears.
1 second after the click, it reappears.
Write a function that removes all items that are not numbers from the array. The function should modify the existing array, not create a new one.
For example, if the input array contains values [1, 'a', 'b', 2], after processing, the array will contain only values [1, 2].

## React Questions

Create three components:
The first component is an input for a string.

The second component accepts a string as a prop and displays it reversed. Eg. “Hello World” becomes “dlroW olleH”.

    The third component contains the first two.

Create a React App that accepts two zipcodes and outputs the distance between them in miles. You are NOT allowed to use any external API related to zipcodes or their distances. All zipcodes with their respective lat/lng are at http://federalgovernmentzipcodes.us/.

### App must have:

A component that accepts and validates the input (two zipcodes).

A component that displays the distance in miles.

You will be disqualified if:

The app uses an external library to calculate distance between zipcodes. This means Google Maps, the zipcodes NPM package, or anything else like that. Do your own math.

### Bonus points:

The app is hosted and running (GitHub Pages, Heroku free tier, etc. Please don’t spend money on this!).

The app is mobile responsive.
