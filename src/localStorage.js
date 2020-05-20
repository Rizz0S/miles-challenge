export const loadState = () => {
  try {
    const boardState = localStorage.getItem('boardState');
    if (!boardState) {
      return undefined;
    }
    return JSON.parse(boardState);
  }
  catch (err) {
    return undefined;
  }
}

export const persistState = (boardState) => {
  try {
    const boardStateStr = JSON.stringify(boardState);
    localStorage.setItem('boardState', boardStateStr);
  }
  catch (err) {
    console.log(err);
  }
}