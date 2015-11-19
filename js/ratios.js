<<<<<<< HEAD
//Instatiate Variables





//Create Functions






//Wait for the document to be ready

function calcRatio(){
	var notid;
	var ratios =  [
=======
// Instantiate Variables


// Create Functions
function calcRatio(){

	var notid;
	var ratios =[
>>>>>>> 6732122e6d96170a571bb11d0287ed10dc9b89a8
		+$(".ratio-i1").val(),
		+$(".ratio-i2").val(),
		+$(".ratio-i3").val(),
		+$(".ratio-i4").val()
	]
	console.log(ratios);

	for(var i in ratios){
		console.log(!!ratios[i]);
<<<<<<< HEAD
		if(notid!==undefined) console.log("Too many cocks!");
=======
		if(notid!==undefined) console.log("TOO MANY COOKS!");
>>>>>>> 6732122e6d96170a571bb11d0287ed10dc9b89a8
		if(!!ratios[i]) notid = i;
	}
	console.log(notid);

<<<<<<< HEAD
	$(".ratio-i4").val((ratios[1]*ratios[2]/ratios[0]).
		toFixed(2));
}



$(function(){
	$(".ratio-submit").on("click",function(){
=======
	$(".ratio-i4").val((ratios[1]*ratios[2]/ratios[0]).toFixed(2));
}

// Wait for the document to be ready
$(function(){
	$(".ratio-submit").on("click", function(){
>>>>>>> 6732122e6d96170a571bb11d0287ed10dc9b89a8
		console.log("HONK")
		calcRatio();
	});

<<<<<<< HEAD
	$(".ratio-input").on("keyup",function(){
		if(
			+$(".ratio-i1").val() &&
			+$(".ratio-i2").val() &&
			+$(".ratio-i3").val()
			) calcRatio();
	})
	$("dt").on("click",function(){
		//$(this).next().slideToggle();
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
				.next().slideUp();
		}else {
			$(this)
				.siblings(".active").removeClass("active")
				.siblings("dd").slideUp;
			$(this).addClass("active").next().slideDown();
=======
	$(".ratio-input").on("keyup", function(){
		if(
		$(".ratio-i1").val() &&
		$(".ratio-i2").val() &&
		$(".ratio-i3").val()
		) calcRatio();

	})

	$("dt").on("click", function(){
		$(this).next().slideToggle();
		if($(this).hasClass("active") {
			$(this).removeClass("active")
				.next().slideUp();
		} else {
			$(this)
				.siblings(".active").removeClass("active")
				.siblings("dd").slideUp();
			$(this).addClass("active").next().slideDown();

>>>>>>> 6732122e6d96170a571bb11d0287ed10dc9b89a8
		}
	});
});