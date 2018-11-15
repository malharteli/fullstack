function LetterCount(str) {

  // array of words
  var words = str.split(" ");

  //create table with keys representing the letters of the word and values representing the number of times they're repeated
  var table={};

  //runs for loop on each word
  for (i=0;i<words.length;i++){
      //var that repesents the word in question
      var thisWord = words[i]
      //creates a new table for the word
      table[thisWord] = {}
      //sets up a key/pair value that for storing the word's highest number count
      table[thisWord]["highest"]=0;
      //for loop to explore all characters in the word to figure out how many times they are repeated
      for (j=0;j<words[i].length; j++){
          //var that represents the selected character
          var char = thisWord[j];
          //checks to see if the character is already in the table. if not, create new key and value of 1 or
          //add 1 if the char matches a key that already exists
          table[thisWord][char]===undefined?table[thisWord][char]=1:table[thisWord][char]+=1;
          //checks if the current char's numerical value is the highest in the table
          if (table[thisWord][char]>table[thisWord]["highest"]){
              table[thisWord]["highest"]=table[thisWord][char];
          }

      }
  }
  //sets up table to store the final answwer
  var answer = {word: null, count: 1};
  //checks each table in the tableArray's "highest" values to see which is the biggest
  for (var w in table){
      //check if current table's highest value is great than answer table's current count vale
      if (table[w]["highest"]> answer["count"]){
          //if this is the case, the count is made to match that of the current word table's highest value
          answer["count"] = table[w]["highest"];
          //and the answer's word key is assigned the current w value (which is a word)
          answer["word"]=w;
      }
  }

  return (answer["count"]=== 1)? -1:answer ["word"];


}

// keep this function call here
LetterCount(readline());


















  
