const START_NEW_GAME = "START_NEW_GAME";
const TURN_CARD = "TURN_CARD";
const CLEAR_TURN_CARD = "CLEAR_TURNED";

const initState = {
  board: null,
  done: [],
  turned: [],
};

export function pexesoReducer(state = initState, action) {
  switch (action.type) {
    case START_NEW_GAME:
      return {...state, board: [[0,1,2],[3,4,5],[6,7,8],[9]], done: [], turned: []}
    case TURN_CARD: {
      const id = action.cardId;
      let {done, turned} = state;
      if (done.indexOf(id) !== -1) return state;
      if (turned.indexOf(id) !== -1) return state;

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
      };
    }
    case CLEAR_TURN_CARD: {
      if (state.turned.length != 2) return state;
      let {done, turned} = state;
      if (turned.length === 2) {
        function turnedCardSame([first, second]) {
          return Math.floor(first/2) === Math.floor(second/2);
        }
        if (turnedCardSame(turned)) {
          done = [...done, ...turned];
        }
        turned = [];
      }
      return {...state,
        turned,
        done,
      };
    }
    default:
      return state;
  }
}


export const acStartNewGame = () => ({type: START_NEW_GAME});

let timer = null;
export const acTurnCard = (cardId) => {
  return (dispatch) => {
   dispatch({
    type: TURN_CARD,
    cardId
   });

   if (timer != null) {
     clearTimeout(timer);
   }
   timer = setTimeout(() => {
     timer = null;
     dispatch({type: CLEAR_TURN_CARD})
   }, 1000)
  }
}