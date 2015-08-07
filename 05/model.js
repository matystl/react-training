
export function range(start, end) {
  const res = [];
  for(let i = start; i < end; i++) res.push(i);
  return res;
}

function flatMap(array, func) {
   return Array.prototype.concat.apply([], array.map(func));
}

function shuffle(array){
  //array,placeholder,placeholder,placeholder
  var res = [...array];
  //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function fy(a,b,c,d){//array,placeholder,placeholder,placeholder
    c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
  }
  fy(res);
  return res;
}

function splitBy(count, array) {
  const res = [];
  const inter = [...array];
  while(inter.length > 0) {
    res.push(inter.splice(0, count));
  }
  return res;
}

export function createNewGame(pictures) {
  return splitBy(4, shuffle(flatMap(pictures,
    (i) => [
      {id: i*2, picture: i},
      {id: i*2+1, picture: i}
    ])
  ));
}

export function isCardsSame([index1, index2]) {
  return Math.trunc(index1/2) === Math.trunc(index2/2);
}
