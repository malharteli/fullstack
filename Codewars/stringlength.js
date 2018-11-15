function VowelCount(str) {

  // code goes here
  return str.match(/[aeiou]/g).length;
}

// keep this function call here
VowelCount(readline());





function WordCount(str) {

  // code goes here
  return str.split(" ").length;
         
}

// keep this function call here
WordCount(readline());
