$(document).ready(function()
{
	
	for (i=0; i<50000; i++)
	{
		var random_white = Math.ceil( Math.random() * 69 );
		
		if (random_white < 70)
		{
			console.log(random_white + " Yay!")
		}
		
		else
		{
			console.log("PROBLEM");
		}
	
		
	}
	
	
	
	
	
	
	
	
	
	
});