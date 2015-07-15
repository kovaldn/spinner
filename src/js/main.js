$(document).ready(function() {
	var spinner = $("#spinner").spinner({
				'min' : 0
			});
			myFriend = $(".acdc"),
			currentPosX = myFriend.css("left"),
			currentPosXint = parseInt(currentPosX, 10);

	spinner.on( "spin", function( event, ui ) {

		// текущее значение спиннера
		var currentVal = ui.value;

		if (currentPosXint == currentVal){ // останавливаем
			return;
		} else if (currentPosXint < currentVal) { // двиваем вправо
			currentPosXint = currentPosXint + 1;
		} else {
			currentPosXint = currentPosXint - 1; // двиваем влево
		}
		myFriend.css("left", currentPosXint);
	});
});