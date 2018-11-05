function isIsogram(str){
  if (str.split("").sort().map(function(item, index, array){
          if (array.lastIndexOf(item)==index){
          return true;
        } else {return false;}
      });
    )
    }
