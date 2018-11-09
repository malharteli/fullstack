//

function diamond(n){
  if(n%2==0 || n<1) return null;
  const middleIndex = Math.floor(n/2);

  return Array.apply(null,{length:n}).map((el, index)=>{
      const indent = Math.abs(index-middleIndex);
      const numberOfAsterisk = n - indent * 2;
      return Array(indent +1).join(' ')+Array(numberOfAsterisk+1).join('*');

  }).join('\n')+'\n'
}
