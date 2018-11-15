function Consecutive(arr) {
    //sort arr first
  sortArr = arr.sort((a,b)=> a-b);
  //create solution variable, which starts with a value of 0
  var sol = 0;
  // Run for loop- subtract arr[i]from proceeding number.
  //If 1, add 0 to solution variable. If not, subtract one from the result and add that to solution var
  for (i=1;i<sortArr.length;i++){
      var diff = sortArr[i]-sortArr[i-1];
      if (diff > 1){
          sol+=(diff-1);
      }else sol +=0;
  }
  return sol;

}

// keep this function call here
Consecutive(readline());
