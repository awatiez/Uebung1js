/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * @param {string} lineId 
 * @param {string} targetId
 * */
function printPascal(lineId, targetId){
	var numOfLine = document.getElementById(lineId).value;
	var pascal = computePascalTriangel(numOfLine);
	var lineToAdd = "";
	var tab = String(pascal[numOfLine - 1][Math.floor(numOfLine /2)]).length + 1;
	document.getElementById(targetId).innerHTML = "";
	for (var i = numOfLine - 1; i >= 0; i--){
		var lineToAdd = "&#160;".repeat((numOfLine - i) * tab);
		for (var j = 0; j <= i; j++){
			lineToAdd += "&#160;".repeat(tab - String(pascal[i][j]).length) + pascal[i][j] + "&#160;".repeat(tab - String(pascal[i][j]).length);
		}
		document.getElementById(targetId).innerHTML = "</br>" + lineToAdd + document.getElementById(targetId).innerHTML;
	}
}

/**
 * @param {integer} numOfLine 
 * @returns {array} a 2-Dimension Array, represents a Pascal Triangle.
 * */
function computePascalTriangel(numOfLine){
	
	var i, j;
    var pascal = new Array();

	for (i = 0; i < numOfLine; i++){
			pascal[i] = new Array();
			pascal[i][0] = 1;
			pascal[i][i] = 1;
			}
	for(i = 0; i < numOfLine; i++){
			for(j = 1; j < i; j++){
					pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
			}
	}
	return pascal;
}
	
var button = document.getElementById("cal");
button.onclick = function(){
	printPascal("line", "pascal3");
};



