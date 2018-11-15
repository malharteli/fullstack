function ExOh(str) {

  // code goes here
  if ((str.match(/[x|X]/g) !==null)&&(str.match(/[o|O]/g)!==null)){
      return (str.match(/[x|X]/g).length == str.match(/[o|O]/g).length)
  } else return false;

}

// keep this function call here
ExOh(readline());
