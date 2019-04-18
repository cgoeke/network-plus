export const PREV_CARD = "PREV_CARD";
export const NEXT_CARD = "NEXT_CARD";
export const SELECT_CARD = "SELECT_CARD";
export const CLEAR_CARD = "CLEAR_CARD";

export const getPrevCard = () => ({
  type: PREV_CARD
});

export const getNextCard = () => ({
  type: NEXT_CARD
});

export const selectCard = (index) => ({
  type: SELECT_CARD,
  index
});

export const clearCard = () => ({
  type: CLEAR_CARD
});