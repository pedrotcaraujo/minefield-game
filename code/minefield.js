
function Minefield () {

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

function cleanField () {
	FIELD.html('');
}


}

