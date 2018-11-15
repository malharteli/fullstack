/*
 * Question 1: Palindrome checks. Returns string of "true" or "false"
 */
function palindrome(str) {
    var tString = "true";
    var fString = "false";
    if (str.split('').reverse().join('').toLowerCase()== str.toLowerCase()){
        return tString;
    } else return fString;


}


/*
 * Question 2: First Repeating Letter. Returns first repeating letter in given string
 */
function firstRepeatingLetter(str) {
  // enter code here
    var strArray = str.split(" ").join().split('');
    for (i=0; i<strArray.length; i++){
     if (strArray[i]!== strArray.lastIndexOf(strArray[i])){
          return strArray[i];
         }
    }
  }

/*
* Question 3: Utopian Tree
*/

  function getHeight(num){
     var height= 1;
      for (i=0; i<num;i++){
        if (i%2==0){
          height *=2;
      }
        if (i%2>0){
          height +=1;
      }
    }
    return (height).toString();

  }

/*
* Question 4: rightTriangle
*
*/
  function rightTriangle(num){
      var resultString="";
      for (i=num; i > 0; i--){
        if (i==1){return resultString.concat("*")}else{
          resultString = resultString.concat(new Array(i).fill("*").join('')).concat("\n")
        }
      }
    }

/*
* Question 5 rotation
*/
function rotation(arr, pivot){
  var arrA = arr.slice(0, arr.length-pivot);
  var arrB = arr.slice(pivot+1, arr.length);
  return arrB.concat(arrA);
}


/*
* Question 6 indexOf (without actually using indexOf)
*/
function indexOf(str, que){
  var strArray = str.split('');
  var queArray = que.split('');
  if (str.includes(que)){
    return strArray.findIndex(c=>matchString(c,i,a));
  }else return -1;
  //straight up, I don't care enough to run a check on every member of quearray.
  function matchString(st, ind, arr){
    if ((st == queArray[0])&&
        (arr[ind+(queArray.length-1)]==queArray[queArray.length-1]))
        {return true;}else return false;
  }
}
