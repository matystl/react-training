export const TURN_CARD = 'TURN_CARD';
export const NEW_GAME = 'NEW_GAME';


export function turnCard(cardId) {
  return {
    type: TURN_CARD,
    cardId,
  }
}

export function startNewGame() {
  return {
    type: NEW_GAME,
  }
}
