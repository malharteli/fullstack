//

function diamond(n){
  if(n%2==0 || n<1) return null;
  var mIndex = Math.floor(n/2);

  return Array.apply(null,{length:n}).map(function(el, index){
      var indent = Math.abs(index-mIndex);
      var numberOfAsterisk = n - indent * 2;
      return Array(indent +1).join(' ')+Array(numberOfAsterisk+1).join('*');

  }).join('\n')+'\n'
}
