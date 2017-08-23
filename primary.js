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
		
		$(WB01).val((Math.ceil(Math.random() * 69 )));
		$(WB02).val((Math.ceil(Math.random() * 69 )));
		$(WB03).val((Math.ceil(Math.random() * 69 )));
		$(WB04).val((Math.ceil(Math.random() * 69 )));
		$(WB05).val((Math.ceil(Math.random() * 69 )));
		$(PB00).val((Math.ceil(Math.random() * 26 )));
	});
});