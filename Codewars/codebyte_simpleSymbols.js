function SimpleSymbols(str) {
    //break string into array
    //find index of letter
    //check if index before and after contain + signs
    //charcode for + sign is 43
    //could use search + regexp
    var splitStr = str.split("");
    boolArray= splitStr.map(function (c, i, a){
        if (c.length==1 && c.match(/[a-z]/g)){
            if (a[i-1]=="+" && a[i+1]=="+"){
            return true;
            }else return false;
        }else return null;
    })
    if (boolArray.includes(false)){return "false"}else return "true";
     // code goes here

}

// keep this function call here
SimpleSymbols(readline());
