// YOUR CODE BELOW
function myMnemonic(strA, strB, strC, strD){
  if (strA==null){strA=""} else strA = strA.charAt(0);
  if (strB==null){strB=""}else strB = strB.charAt(0);
  if (strC==null){strC=""} else strC = strC.charAt(0);
  if (strD==null){strD=""} else strD = strD.charAt(0);
  strA = strA.charAt(0);

  var strArray = [strA, strB, strC, strD];
  for (i=0; i<strArray.length; i++)
    {
      if (strArray[i]==null){
        strArray[i]= "";
      }else strArray[i]= strArray[i].charAt(0);
    }

  return strArray.join('')

}
