
var white_balls = [36, 44];

function white_ball_randomizer()
{
	var random_white = Math.ceil( Math.random() * 69 );
	checker(random_white);
}

function checker(random_white)
{
	white_balls.forEach(function(el,i)
	{
		if ( random_white != white_balls[el])
		white_balls.push(random_white);
		console.log(white_balls);
	});

	
}

console.log(white_balls);

