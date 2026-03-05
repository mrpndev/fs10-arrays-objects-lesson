/* 
	? Objects Methods
	* different fromt array methods
	* because we're the ones who will build majority of them
	* they require 'this' to access data, or else, they grab global scope
	* 'this' is a magical keyword which defines scope
		* means - here, right now
*/

let f1teams = {
	name: "Petronas",
	principal: "Toto Wolff",
	location: "England",
	drivers: ["Kimi Antonelli", "George Russell"],

	listDrivers() {
		return this.drivers
	},

	definitionOfThis() {
		return this
	},

	// remember when I said this does not bind on arrow fx expressions?

	thisArrowFx: () => {
		return this
		// ! DO NOT USE: this is not bound to the object
	},

	addDrivers: function(driver) {
		this.drivers.push(driver)
	}
}

console.log(f1teams.listDrivers())
console.log(f1teams.definitionOfThis())
console.log(f1teams.thisArrowFx())
f1teams.addDrivers("Frederik Vesti")
console.log(f1teams)

/* 
	? Challenge
	* let's build a todo object with today, tomorrow, and urgent properties
	* properties should have empty arrays
	* now build the following methods
	* addToday - to add an item to today key
	* addTomorrow - to add an item to tomorrow key
	* clearAll - which clears all arrays
	! HARD MODE - removeFrom which will remove an item from selected property
*/

let toDo = {
	today: [],
	tomorrow: [],
	urgent: [],

	addToday(item) {
		this.today.push(item)
	},

	addTomorrow(item) {
		this.tomorrow.push(item)
	},

	clearAll() {
		this.today = []
		this.tomorrow = []
		this.urgent = []
	},

	removeFrom(list, item) {
		this[list] = this[list].filter(i => i != item)
	}
}

toDo.addToday("get milk")
toDo.addToday("buy a car")
toDo.addToday("go on vacation")
toDo.addToday("make monaeyyyyyy")
toDo.addTomorrow("buy a ticket")
// toDo.clearAll()

toDo.removeFrom("today", "get milk")
console.log(toDo)


