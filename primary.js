
var white_balls = [];

function white_ball_randomizer()
{
	var random_white = Math.ceil( Math.random() * 69 );
	checker(random_white);
}

function checker(random_white)
{
	var test = random_white % 2;
	
	if (test == 0)
	{
		console.log("EVEN");
	}
	
	else
	{
		console.log("ODD")
	
	}

	
}

console.log(white_balls);

