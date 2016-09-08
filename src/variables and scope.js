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

}
