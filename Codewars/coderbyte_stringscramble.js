function StringScramble(str1,str2) {

  // code goes here
  var aArr =  str1.split('').sort();
  var bArr = str2.split('').sort();
  var boolArray = []
  if (bArr==aArr){
      return true;
  }else for(i=0;i<bArr.length;i++){
      if (aArr.includes(bArr[i])){
          boolArray.push(true);
          aArr.splice(aArr.indexOf(bArr[i]),1,"")
      }

  }
  if (boolArray.length == bArr.length){
      return true;
  } else return false;



}

// keep this function call here
StringScramble(readline());
