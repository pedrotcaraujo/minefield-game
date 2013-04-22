function chooseTypeGame (typeGame) {

	if (typeGame=="8") {
		mountField(8,8, 10);
	} else
	if (typeGame="16") {
		mountField(16.16, 40);
	} else
	if (typeGame=="custom") {
		var lin = parseInt(document.getElementById('field-line'));
		var col = parseInt(document.getElementById('field-col'));
		var mines = parseInt(document.getElementById('field-mines'));

		mountField(lin, col, mines);
	};
}

function mountField (lin, col, mines) {

	var field = document.getElementById('field');

	var lineArray = Array(lin);
	var colunmArray = Array(col);

	for (var i = 0; i < lineArray.length; i++) {
		lineArray[i] = "0";
		if (i>0) {
			field.innerHTML("<br>");
		}

		for (var i = 0; i < colunmArray.length; i++) {
			colunmArray[i] = "0";
			field.innerHTML("<span class='mine-field'>"+colunmArray[i]+"</span>");
		};
		
	};



}

function addBomb (lineArray, colunmArray) {
	
	for (var i = 0; i < lineArray.length; i++) {
		lineArray[i]
	};

}

function calcSideFields (argument) {
	// body...
}