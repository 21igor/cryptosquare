// back end logic
var encrypt = function (text) {
  var sentenceArray = ((text.toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?’"”“ ]/g,"")).split("");
  var size = sentenceArray.length; 
}

var rectangleRows = function(number) {
  var sqRoot = Math.sqrt(number);
  if (sqRoot % 1 === 0) {
    // is square
    return sqRoot;
  } else {
      return parseInt(sqRoot) + 1;
  }
}

//Front end logic
$(function(){
  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var originalText = $("input#original-text").val();

    $("#result").text(encrypt(originalText));
  });
});
