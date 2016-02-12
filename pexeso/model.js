import {TURN_CARD, NEW_GAME} from './actions';

function range(start,end) {
  const res = [];
  for(let i=start; i < end; i++) {
    res.push(i);
  }
  return res;
}

function shuffle(array){
  var res = [...array];
  //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function fy(a,b,c,d){//array,placeholder,placeholder,placeholder
    c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
  }
  fy(res);
  return res;
}

function splitBy(count, array) {
  let original = [...array];
  let res = [];
  while(original.length) {
    res.push(original.splice(0, count));
  }
  return res;
}

export function createNewGame() {
  return splitBy(4,shuffle(range(0,16).map(
    (i) => ({id:i, picture: Math.floor(i/2)})
  )));
}

const initialState = {
    // [[ oneCard, ...], ... ]
    // oneCard {id: 15, picture: 5}
    game: null,
    turned: [],
    done: [],
    turns: 0,
}

export function pexesoReducer(state = initialState, {type, cardId: id}) {
  switch (type) {
    case NEW_GAME:
      return {
        ...state,
        turns:0,
        done: [],
        turned: [],
        game: createNewGame(),
      };
    case TURN_CARD: {
      let {done, turned, turns} = state;
      if (done.indexOf(id) !== -1) return;
      if (turned.indexOf(id) !== -1) return;

      if (turned.length === 2) {
        function turnedCardSame([first, second]) {
          return Math.floor(first/2) === Math.floor(second/2);
        }
        if (turnedCardSame(turned)) {
          done = [...done, ...turned];
        }
        turned = [];
      }
      return {
        ...state,
        turned: [...turned, id],
        done,
        turns: turns + 1,
      };
    }
    default:
      return state;
  }
}
