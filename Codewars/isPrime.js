/*
function isPrime(num) {
  if (num > 1){
    if (num===2){
      return true;
    } else
    for (var i=0; i<num; i++){
      if (num % i ===0){
        return false;
      } else return true;
    }
  }else return false;
}
*/

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
