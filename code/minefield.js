
function Minefield () {

<<<<<<< HEAD
//	Declaring constant
const FIELD = $('#field');
var mines;
var row;
var col;
var fieldsArray;

//	Init method for build the game	
this.init = function(typeGame) {		

	cleanField();

//	Compare type selected by user, if is 8x8, 16x16 or custom game
if (typeGame=="8") {

	row = 8;
	col = 8;
	mines = 10;

	fieldsArray = buildArray(row,col);

} else if (typeGame="16") {

	row = 16;
	col = 16;
	mines = 40;

	fieldsArray = buildArray(row,col);

} else if (typeGame=="custom") {

	row = parseInt(document.getElementById('field-row'));
	col = parseInt(document.getElementById('field-col'));
	mines = parseInt(document.getElementById('field-mines'));

	fieldsArray = buildArray(row,col);			
}

mountField();
addBomb();

}

//	Function that will mount the minefield and insert 0 into each field.
function mountField () {

	for (var i = 0; i < row; i++) {
		if (i>0) {
			FIELD.append('<br>');
		}
		for (var j = 0; j < col; j++) {
			fieldsArray[i][j] = "0";
			FIELD.append("<span class='mine-field'>"+fieldsArray[i][j]+"</span>");
		}

	}

}

// Function tha will add bombs into minefield randomly
function addBomb () {

	var amountFields = $('.mine-field');
	var bombs = [];

	while (bombs.length < mines) {
		var randomnumber = Math.ceil(Math.random()*amountFields.length);
		var found = false;
		for (var i=0; i < bombs.length; i++) {
			if (bombs[i] == randomnumber) {
				found = true;
				break;
			}
		}
		if (!found) {
			bombs[bombs.length] = randomnumber;
		}

		for (var i = 0; i < bombs.length; i++) {
			$(amountFields[bombs[i]]).html("").append("*").css("color","red");
		}
	}

}

// Function that will calculate adjacent fields of the bomb and sum 1 into then.
function calcSideFields () {

}

// Function that will build bidimensional array
function buildArray (row, col) {
	var fieldsArray = new Array(row);

	for (var i = 0; i < fieldsArray.length; i++) {
		fieldsArray[i] = new Array(col);
	}

	return fieldsArray;
}

// Clear minefield in div#field
=======
	const FIELD = $('#field');

	this.init = function(typeGame) {

		cleanField();

		if (typeGame=="8") {
			mountField(8,8, 10);
		} else
		if (typeGame="16") {
			mountField(16,16, 40);
		} else
		if (typeGame=="custom") {
			var row = parseInt(document.getElementById('field-row'));
			var col = parseInt(document.getElementById('field-col'));
			var mines = parseInt(document.getElementById('field-mines'));

			mountField(row, col, mines);
		};

	}

	function mountField (row, col, mines) {

		var fieldsArray = new Array(row);
		
		 for (var i = 0; i < fieldsArray.length; i++) {
		 	fieldsArray[i] = new Array(col);
		 }

		for (var i = 0; i < row; i++) {
			if (i>0) {
				FIELD.append('<br>');
			}
			for (var j = 0; j < col; j++) {
				fieldsArray[i][j] = "0";
				FIELD.append("<span class='mine-field'>"+fieldsArray[i][j]+"</span>");
			}

		}

	}

	function addBomb (lineArray, colunmArray) {

		for (var i = 0; i < lineArray.length; i++) {
			lineArray[i]
		}

	}

	function calcSideFields (argument) {
	// body...
}

>>>>>>> 336b0c117b12ad8fb69f6bd1ce7a95cd907a8ab8
function cleanField () {
	FIELD.html('');
}


}

