/* eslint-env jquery */

$(document).ready(function()
{
	$("#BTN01").on("click", function()
	{
		var WB01 = document.getElementById("WB01")
		var WB02 = document.getElementById("WB02")
		var WB03 = document.getElementById("WB03")
		var WB04 = document.getElementById("WB04")
		var WB05 = document.getElementById("WB05")
		var PB00 = document.getElementById("PB00")
		
		var array1 = [WB01, WB02, WB03, WB04, WB05];
		
		$(array1).each(function(i, element)
		{
			element = Math.ceil(Math.random() * 69 );
			console.log(element);
		});
		
		$/*(WB01).val((Math.ceil(Math.random() * 69 )));
		$(WB02).val((Math.ceil(Math.random() * 69 )));
		$(WB03).val((Math.ceil(Math.random() * 69 )));
		$(WB04).val((Math.ceil(Math.random() * 69 )));
		$(WB05).val((Math.ceil(Math.random() * 69 )));
		$(PB00).val((Math.ceil(Math.random() * 26 )));*/
	});
});