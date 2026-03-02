/* 
	? Arrays
	* collection of multiple items
	* like a list, or a collection
	* we use [ ] to define it
	* data type agnostic
	* indexable
*/

let myFirstArray = [] // creates an empty array

console.log(myFirstArray)
console.log(myFirstArray.length) // checks the length of your array

let vistedCountries = ["England", "France", "Germany", "Poland", "Canada"]
console.log(vistedCountries)

// Array can be accessed using index, just like strings

console.log(vistedCountries[2])

// What would happen if I accessed something out of bounds?

console.log(vistedCountries[9])

// ? How do we add more data into an array?

vistedCountries[vistedCountries.length] = "Switzerland"
console.log(vistedCountries)

// ? How do we reassign values?

vistedCountries[1] = "Mexico"

console.log(vistedCountries)

/* 
	? Challenge
	* create a function, called findItem
	* it will take two parameters, arr and search
	* itereate thru the array
	* check if the item from the search param is found in the array
	* return true if found false if not
*/



