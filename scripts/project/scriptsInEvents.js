"use strict";



{
	const scriptsInEvents = {

		async EventSheet1_Event2_Act2(runtime, localVars)
		{
			console.log(runtime.globalVars.PlayerValue)
		},

		async EventSheet1_Event3_Act2(runtime, localVars)
		{
			console.log(runtime.globalVars.EnemyValue)
		},

		async EventSheet1_Event9_Act1(runtime, localVars)
		{
			console.log("You Win!")
		},

		async EventSheet1_Event10_Act1(runtime, localVars)
		{
			console.log("You Lose!")
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
