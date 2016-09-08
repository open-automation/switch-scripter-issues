
function jobArrived( s : Switch, job : Job )
{

	/*
		Working ways to construct objects
	*/

	// Object constructor
	var person = new Object();
	person.name = "Diego";
	s.log(-1, "Constructed " + person.name);

	// Literal notation
	var person = {
	    name : "Diego"
	}
	s.log(-1, "Literal " + person.name);

	// Factory function
	var newPerson = function(name){
	    var result = new Object();
	    result.name = name;
	    return result;
	};
	var personOne = newPerson("Diego");
	s.log(-1, "Factory " + personOne.name);

	/*
		Non-working ways to construct objects
	*/

	// Function constructor
	function Person(name){};
	// var personOne = new Person("Diego"); // TypeError. Cannot instantiate function 'Person'

	// Prototype
	function Person(){};
	// Person.prototype.name = "Diego"; // Error. Trying to access undefined member 'prototype'
	// var person = Object.create({name: "Diego"}); // The short hand for prototype also doesn't work


	// Singleton
	// var singleton = new function(){}; // TypeError. Cannot instantiate function 'anonymouse'


	/*
		Working with Objects
	*/

	var person = new Object();
	person.name = "Diego";

	// Accessing properties with dot notation
	s.log(-1, "Dot notation property " + person.name);

	// Accessing properties with bracket notation
	s.log(-1, "Bracket notation property " + person["name"]);

	// Accessing undefined properties fail fataly
	// s.log(-1, "Dot notation property " + person.doesnt_exist); // Error. Trying to access undefined member

	// Using "this" results in a crash
	person.getName = function(){
	    return this.name;  // ***CRASH***
	};
	// s.log(-1, person.getName()); // ***CRASH***

}
