$(document).ready(function()
{
	$("#BTN01").on("click", function()
	{
		var B1 = document.getElementById("WB01")
		var B2 = document.getElementById("WB02")
		
		var allof = [B1, B2];
		
		console.log($(allof).val());
		
		/*$("#PBN01").val(Math.ceil(Math.random()* 69));*/
		
		$/*("#PBN01").val("450");*/
	});
});