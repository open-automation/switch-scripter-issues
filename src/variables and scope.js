// Declaring variables in the global scope is fine
var global_variable = "global_variable";

// Named function, level 1
function jobArrived( s : Switch, job : Job )
{
	// Variables are not hoisted within function scope
	if(typeof function_1_scope_variable == 'undefined') // true

	// Declaring variables within a top level function scope is fine
	var function_1_scope_variable = "function_1_scope_variable";

	// Declaring variables within a function scope's block is fine
	if(true){
		var function_1_block_scope_variable = "function_1_block_scope_variable";
	}

	// Anonymous function, level 2
	function(){

		// Declaring variables within secondary level function scope is fine
		var function_2_scope_variable = "function_2_scope_variable";

		if(true){
			// Declaring variables within a secondary level function scope's block causes a crash
			// var function_2_block_scope_variable = "function_3_block_scope_variable"; // ***CRASH***

			// Instead, assign the non-declared variable
			function_2_block_scope_variable = "function_2_block_scope_variable";

			// All but the first function's block scope variables are available here
			s.log(
					-1,
					(
						typeof(global_variable) + " " +	// string
						typeof(function_1_scope_variable) + " " + // string
						typeof(function_1_block_scope_variable) + " " + // undefined
						typeof(function_2_scope_variable) + " " + // string
						typeof(function_2_block_scope_variable) // string
					)
				);
		}
	}();


	/* Declaring block variables in any top level function scope is fine 				*/

	if(true){ // Block 1
		var x = 1;
		if(true){ // Block 2
			var x = 2;
			if(true){ // Block 3
				var x = 3;
				if(true){ // Block 4
					var x = 4;
					if(true){ // Block 5
						var x = 5;
					}
				}
			}
		}
	}

	/* Declaring variables in any function scope, outside of blocks, is fine 	*/

	function(){ // Scope level 2
		var x = 1;
		function(){ // Scope level 3
			var x = 2;
			function(){ // Scope level 4
				var x = 3;
				function(){ // Scope level 5
					var x = 4;
					function(){ // Scope level 6
						var x = 5;
					}();
				}();
			}();
		}();
	}();


	/* Declaring variables in any function scope, outside of blocks, is fine.
		You can even use if/else without declaring a block {}.					*/

	function(){ // Scope level 2
		if(true) var x = 1; // Ok
		/*
		if(true){ // ***CRASH***
			var x = 1;
		}
		*/
		function(){ // Scope level 3
			if(true) var x = 2; // Ok
			/*
			if(true){ // ***CRASH***
				var x = 2;
			}
			*/
			function(){ // Scope level 4
				if(true) var x = 3; // Ok
				/*
				if(true){ // ***CRASH***
					var x = 3;
				}
				*/
				function(){ // Scope level 5
					if(true) var x = 4; // Ok
					/*
					if(true){ // ***CRASH***
						var x = 4;
					}
					*/
					function(){ // Scope level 6
						if(true) var x = 5; // Ok
						/*
						if(true){ // ***CRASH***
							var x = 5;
						}
						*/
					}();
				}();
			}();
		}();
	}();


	/* Declaring variables */

	// Multiple variables can be declared in a single go
	var a, b, c, d, e;

	// Multiple variables can be declared and assigned in a single go
	var 	a = 1,
			b = 2,
			c = 3,
			d = 4,
			e = 5;

}
