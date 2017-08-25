
var white_balls = [];

function white_ball_randomizer()
{
	var random_white = Math.ceil( Math.random() * 69 );
	checker(random_white);
}

function checker(random_white)
{
	$(document).ready(function()
	{
		$.each(white_balls, function(i, el)
		{
			if (random_white != white_balls[el])
			{
				console.log(random_white);
				white_balls.push(random_white);				
			}
				
		});
	});
	
}

console.log(white_balls);

