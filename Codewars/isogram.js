/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str){
  var boolArray = (str.toLowerCase().split("").sort().map(function(item, index, array){
          if (array.lastIndexOf(item)==index){
          return true;
        } else return false
      })
    )
  if (boolArray.includes(false)){return false;} else return true;
  }
