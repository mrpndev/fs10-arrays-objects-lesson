/* 
	? Objects
	* structured container for data
	* in a JavaScript Object Notation (JSON)
		* a way to keep structured data, parse it, and send it efficiently (as string)
	* JSON is actually a string that gets parsed and built up
	* no index ability but it does give us structure
	* the structure comes in the form of .properties
	* it also has .methods() -- some built in, some we can create
	* utilizes this keyword
*/

// ? How to create an object

let sampleObject = {}
console.log(sampleObject)

let student = {
	// property: value,
	// key: value pair
	name: "Scott",
	age: 30,
	cohort: "fullstack-10",
	grades: [90, 25, 30, 17, 100],
	isEnrolled: true
}
console.log(student)

// ? Let's talk real JSON real quick

// ? turn an object into a JSON string

let jsonString = JSON.stringify(student) // efficient for web transport
console.log(typeof jsonString, jsonString)

// ? how to turn JSON string into an object to parse

let sampleJSONString = '{ "name": "Paul", "age": 30 }'

let jsonObject = JSON.parse(sampleJSONString)
console.log(jsonObject)

// ? HINT: JSON parse is VERY sensitive to proper syntax

// TODO: provide students with syntax for JSON

// ? Access any property or value using property and key

console.log(student.cohort) // returns the value of cohort property

console.log(student["name"]) // NOT an array, but syntax is the same

console.log(student[2]) // undefined -- NOT indexable & NOT an array

// ? How to modify properties and values

student.isEnrolled = false
console.log(student)

// ? How to add property and a value

student.mainLanguage = "JavaScript"

console.log(student)

// ? Simple built-in methods on Objects

// Object - interface creating object instances; .keys - method on that object
let studentProperties = Object.keys(student) // get all object keys in an array format
console.log(studentProperties)

let studentValues = Object.values(student)
console.log(studentValues)

/* 
	? JS Fundamentals Crash Course
	* JS is a prototype-based object oriented language
	* meaning every data type (string, array, null, etc.) is an object
	* so how do they get created?? Using a constructor
	* constructor will instantiate a new object using new keyword
	* this new object is a direct descendant of that constructor (factory)	
*/

let newStr = new String("this is my string off String constructor")
console.log(newStr)
let newArray = new Array(5)
console.log(newArray)

// examples of methods used on instances of constructor created objects
console.log(newStr.toLowerCase())
console.log(newArray.filter(i => i))

/* 
	? Challenge
	* access Scott's grades and return a GPA into a variable
	* do it using array methods
	* GPA sum/number of grades

	! HARD MODE - add the result to the property called gpa
*/

// Using Reduce
student.gpa = student.grades.reduce((sum, num) => sum + num, 0) / student.grades.length
console.log(student.gpa)

// Using forEach
let total = 0
student.grades.forEach(grade => total += grade)

student.gpaForEach = total / student.grades.length

console.log(student.gpaForEach)

