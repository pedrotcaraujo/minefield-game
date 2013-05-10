
function Minefield () {

//	Declaring constant
var mines;
var row;
var col;
var fieldsArray;
var bombs = [];

//	Init method for build the game	
this.init = function(typeGame) {		

	cleanField();

	//	Compare type selected by user, if is 8x8, 16x16 or custom game
	if (typeGame==="8") {

		row = 8;
		col = 8;
		mines = 10;

		fieldsArray = buildArray(row,col);

	} else if (typeGame==="16") {

		row = 16;
		col = 16;
		mines = 40;

		fieldsArray = buildArray(row,col);

	} 
// Create a custom game
//	else if (typeGame==="custom") {

//		row = parseInt(document.getElementById('field-row'));
//		col = parseInt(document.getElementById('field-col'));
//		mines = parseInt(document.getElementById('field-mines'));

//		fieldsArray = buildArray(row,col);			
//	}


	addBomb();
	calcAdjacentFields();
	mountField();
	startGame();

};

//	Function that will mount the minefield and insert 0 into each field.
function mountField () {

	var indexCount = 0;

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
//			if (fieldsArray[i][j] === "*") {
//				$('#field').append("<span id='field-"+indexCount+"' class='mine-field' style='color:red'>"+fieldsArray[i][j]+"</span>");
//			} else{
				$('#field').append("<div id='field-"+indexCount+"' class='mine-field'></div>");				
//			}

			indexCount++;		
		}
	}

}

// Function tha will add bombs into minefield randomly
function addBomb () {

	var amountFields = row * col;	
	var indexBomb = 0;

	while (bombs.length < mines) {
		var randomnumber = Math.ceil(Math.random()*amountFields);
		var found = false;
		for (var i=0; i < bombs.length; i++) {
			if (bombs[i] === randomnumber) {
				found = true;
				break;
			}
		}
		if (!found) {
			bombs[bombs.length] = randomnumber;
		}

//		for (var i = 0; i < bombs.length; i++) {
//			$(amountFields[bombs[i]]).html("").append("*").css("color","red");
//		}
	}

		for (var index = 0; index < row; index++) {
			for (var j = 0; j < col; j++) {
				
				for (var b = 0; b < bombs.length; b++) {
					if (bombs[b] === indexBomb) {
						fieldsArray[index][j] = "*";
					} else if (fieldsArray[index][j] !== "*") {
						fieldsArray[index][j] = 0;
					}
				}

				indexBomb++;
			}
		}

}

// Function that will calculate adjacent fields of the bomb and sum 1 into then.
function calcAdjacentFields () {
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			if (fieldsArray[i][j] === "*") {
//	Check adjacent fields on down row
				if (i<row-1) {
					if (fieldsArray[i+1][j] !== "*") {
					fieldsArray[i+1][j] = fieldsArray[i+1][j]+1;
					}
					if (j<col-1) {
						if (fieldsArray[i+1][j+1] !== "*") {
						fieldsArray[i+1][j+1] = fieldsArray[i+1][j+1]+1;
						}
					}
					if (j>0) {
						if (fieldsArray[i+1][j-1] !== "*") {
						fieldsArray[i+1][j-1] = fieldsArray[i+1][j-1]+1;
						}
					}
				}
//	Check adjacent fields on up row
				if (i>0) {
					if (fieldsArray[i-1][j] !== "*") {
					fieldsArray[i-1][j] = fieldsArray[i-1][j]+1;
					}
					if (j<col-1) {
						if (fieldsArray[i-1][j+1] !== "*") {
						fieldsArray[i-1][j+1] = fieldsArray[i-1][j+1]+1;
						}
					}
					if (j>0) {
						if (fieldsArray[i-1][j-1] !== "*") {
						fieldsArray[i-1][j-1] = fieldsArray[i-1][j-1]+1;
						}
					}
				}
//	Check adjacent fields same row
				if (j<col-1) {
					if (fieldsArray[i][j+1] !== "*") {
					fieldsArray[i][j+1] = fieldsArray[i][j+1]+1;
					}
				}
				if (j>0) {
					if (fieldsArray[i][j-1] !== "*") {
					fieldsArray[i][j-1] = fieldsArray[i][j-1]+1;
					}
				}

			}
		}
	}
}

// Function that will build bidimensional array
function buildArray (row, col) {
	var fieldsArray = new Array(row);
	$('#field').css('width', col*38+"px");

	for (var i = 0; i < fieldsArray.length; i++) {
		fieldsArray[i] = new Array(col);
	}

	return fieldsArray;
}

function cleanField () {
	$('#field').html('');
}

function startGame () {
	
	$('div[id^="field-"]').click(function() {
		var indexCount = 0;
		var found = false;
		var id = $(this).attr('id');
		var id = parseInt(id.substring(6));


		for (var i = 0; i < row; i++) {
			for (var j = 0; j < col; j++) {

				if (indexCount===id) {

					for (var b = 0; b < bombs.length; b++) {
						if (bombs[b]===id) {
							alert("BOMBA");
							$(this).html(fieldsArray[i][j]).css("color","red");
							found = true;
						}
					}

					if (!found) {
						$(this).html(fieldsArray[i][j]);
						if (fieldsArray[i][j] === 0) {

						}

					}

				}

				indexCount++;
			}
		}


		
	});
}

function calculateEmptyFields (i, j) {

	//	Check adjacent fields on down row
							if (i<row-1) {
								if (fieldsArray[i+1][j] === 0) {
									var element = findFieldArray(i+1,j);
									element.appendChild = fieldsArray[i+1][j]);
									calculateEmptyFields(i+1, j);
								}
								if (j<col-1) {
									if (fieldsArray[i+1][j+1] === 0) {
									fieldsArray[i+1][j+1] = fieldsArray[i+1][j+1]+1;
									}
								}
								if (j>0) {
									if (fieldsArray[i+1][j-1] === 0) {
									fieldsArray[i+1][j-1] = fieldsArray[i+1][j-1]+1;
									}
								}
							}
			//	Check adjacent fields on up row
							if (i>0) {
								if (fieldsArray[i-1][j] === 0) {
								fieldsArray[i-1][j] = fieldsArray[i-1][j]+1;
								}
								if (j<col-1) {
									if (fieldsArray[i-1][j+1] === 0) {
									fieldsArray[i-1][j+1] = fieldsArray[i-1][j+1]+1;
									}
								}
								if (j>0) {
									if (fieldsArray[i-1][j-1] === 0) {
									fieldsArray[i-1][j-1] = fieldsArray[i-1][j-1]+1;
									}
								}
							}
			//	Check adjacent fields same row
							if (j<col-1) {
								if (fieldsArray[i][j+1] === 0) {
								fieldsArray[i][j+1] = fieldsArray[i][j+1]+1;
								}
							}
							if (j>0) {
								if (fieldsArray[i][j-1] === 0) {
								fieldsArray[i][j-1] = fieldsArray[i][j-1]+1;
								}
							}
}

function findFieldArray(row, col) {
	var element;
	var indexCount = 0;
		for (var i = 0; i < row; i++) {
			for (var j = 0; j < col; j++) {

				if (i === row && j === col) {
					element = document.getElementById('field-'+indexCount);
				}

				indexCount++;
			}
		}
	return element;
}


}

