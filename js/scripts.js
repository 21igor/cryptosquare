// back end logic
var encrypt = function (text) {
  var sentenceArray = ((text.toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?’"”“' ]/g,"")).split("");
  var size = sentenceArray.length;
  var matrix = splitSentence(sentenceArray,rectangle(size));

  return readColumns(matrix).join("");
}

var splitSentence =function (sentenceArray,dimensions) {
  var matrix = [];
  var j = dimensions[1];
  for (var i=0; i < dimensions[0]; i++){ // x
    matrix.push(sentenceArray.slice((i*j),(i*j)+j));
  }
  return matrix;
}

var rectangle = function(number) {
  var sqRoot = Math.sqrt(number);
  return [Math.ceil(sqRoot),Math.floor(sqRoot)];
}

var readColumns = function(matrix){
  var result = [];
//  console.log(matrix[0].length);
  for (var i=0; i < matrix.length; i++) {
    matrix.forEach(function (row,index) {
      //console.log(row);
       if(row[0]){
        result.push (row.splice(0,1)[0]);
       }
    });
  }
  result = encryptedString(result);
  return  result;
}

var encryptedString = function (array) {
  for (i=5; i<array.length; i=i+5) {
  array.splice(i,0," ");
  i++;
  }
  return array;
}

//Front end logic
$(function(){
  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var originalText = $("input#original-text").val();

    $("#result").text(encrypt(originalText));
  });
});
