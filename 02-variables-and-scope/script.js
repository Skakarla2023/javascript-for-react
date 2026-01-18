function demo(){
	var count = 1;
	
	if(true) {
		var count = 2;
		console.log("Inside if (var):",count);
	}
	
	console.log("Outside if(var):", count);
}

demo();

function demolet(){
	let score = 10;
	
	if(true) {
		let score = 20;
		console.log("Inside if(let):", score);
	}
	
	console.log("Outside if(let):",score);
}

demolet();

function democonst(){
	const appName = "MyApp";
	const user = { name: "Satwika" };
	
	user.name = "JS Learner";
	
	console.log("App name:", appName);
	console.log("User name:",user.name);
	
}

democonst();
