
var white_balls = [];

function white_ball_randomizer()
{
	var random_white = Math.ceil( Math.random() * 69 );
	checker(random_white);
}

function checker(random_white)
{
	if (random_white != white_balls)
		{
			white_balls.push(random_white);
			console.log(white_balls);
		}
	
	
}

