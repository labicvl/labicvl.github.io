$(function () {
    $(".showSingle").click(function () {
		var index = $(".showSingle").index(this);
		   newTarget = $(".targetDiv").eq(index).slideDown();
		$(".targetDiv").not(newTarget).slideUp();
		
    });
});