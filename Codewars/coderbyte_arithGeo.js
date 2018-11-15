function ArithGeo(arr) {

  // code goes here
  var arithDiff;
  var geoDiff;
  var arithArray = [];
  var geoArray = [];
   function diffArt(arr, n){return arr[n+1]-arr[n]}
 function diffGeo(arr, n){return arr[n+1]/arr[n]}
  for (i = 1; i<arr.length-1;i++){
      if (diffArt(arr, i) == diffArt(arr, i-1)){
          arithArray.push(true);
      }else arithArray.push(false);
      if (diffGeo(arr, i)== diffGeo(arr, i-1)){
          geoArray.push(true);
      }else geoArray.push(false);
  }
   if (arithArray.includes(false) &&geoArray.includes(false)){
       return -1;
   }else if (arithArray.includes(false)){return "Geometric"}else return "Arithmetic";

}



// keep this function call here
ArithGeo(readline());
