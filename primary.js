
var white_balls = [];

function white_ball_randomizer()
{

	var random_white = Math.ceil( Math.random() * 69 );
	checker(random_white);

}

function checker(random_white)
{
	
	if ( white_balls.length < 1 )
	{
		white_balls.push(random_white);
		console.log(white_balls);
	}
	
	else 
	{
		while ( white_balls.length < 5 )
		{
			white_balls.forEach(function(element, index)
			{
				
				if ( random_white != white_balls[element] )
				{
					white_balls.push(random_white);
					white_ball_randomizer();
				}
					
				else 
				{
					white_ball_randomizer();
				}
				
			});
			
		}
		
	}	
	
}