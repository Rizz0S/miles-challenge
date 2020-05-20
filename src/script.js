import store, { persistedState } from './store.js';
import { ActionCreators }  from 'redux-undo';

/**
 * Function to map the current state of the tile board so appropriate tiles are visible.
 * 
 * @param  {i} Number iterator that reflects current award row
 * @param  {j} Number iterator that reflects current category column
 * @param  {tile} DOM_Element reward tile that belongs to respective place in the board
 * @param  {removeBtn} DOM_Element reward tile that belongs to respective place in the board
 * @param  {state} Object current board state
*/
function mapTilesToBoardState (i, j, tile, btn, state) {
  // if reward tile is in the board state, make it visible
  if (state.present[`r${i}`].includes(`c${j}`)) {
    tile.style.opacity = "1";
    tile.style.visibility = "visible";
    btn.style.opacity = "1";
    btn.style.visibility = "visible"; 
  } else {
    tile.style.opacity = "0";
    btn.style.opacity = "0"; 
    // timeout is used so that the transition event is seen
    setTimeout(() => {
      tile.style.visibility = "hidden";
      btn.style.visibility = "hidden";
    }, 1000);
  }
}

/**
 * Function to update the DOM to reflect a redo/undo action.
*/
function updateBoard () {
  // get current board state
  const state = store.getState();

  // init the iterators 
  let i = 1;
  let j = 1;
  document.querySelectorAll(".category").forEach((category) => {
    // restart category iterator once we reach the limit and increment the reward iterator
    if (j > 5) {
      j = 1;
      i++;
    }

    let tile = document.querySelector(`.reward-tile.r${i}.c${j}`);
    let btn = document.querySelector(`.remove-btn.r${i}.c${j}`);

    mapTilesToBoardState(i, j, tile, btn, state);
    j++;
  })
}

document.querySelector(".undo-btn").addEventListener("click", () => {
  // use redux-undo to perform undo action, then update board
  store.dispatch(ActionCreators.undo())
  updateBoard();
})

document.querySelector(".redo-btn").addEventListener("click", () => {
  // use redux-undo to perform redo action, then update board
  store.dispatch(ActionCreators.redo());
  updateBoard();
})

/**
 * Function to create and append reward tiles and their remove buttons as per the current board state.
 * Called on page load.
 * 
 * @param  {state} Object current board state - either a clean slate or persisted state from local storage
*/
function renderTilesAndButtons(state) {
  // init the iterators
  let i = 1;
  let j = 1;
  document.querySelectorAll(".category").forEach((category) => {
    // restart category iterator once we reach the limit and increment the reward iterator
    if (j > 5) {
      j = 1;
      i++;
    }

    // create and append the reward tiles and their respective remove buttons
    const tile = document.createElement("div");
    const removeBtn = document.createElement("div");

    tile.className = `reward-tile r${i} c${j}`;
    removeBtn.className = `remove-btn r${i} c${j}`;
    removeBtn.innerText = 'x';

    mapTilesToBoardState(i, j, tile, removeBtn, state)

    category.appendChild(tile);
    category.appendChild(removeBtn);

    // add event listeners to the buttons to "remove" them from the board
    // everything is rendered to the DOM initially, but opacity and visibility are toggled by adding/removing them
    removeBtn.addEventListener("click", e => {
      // grab the coordinates of the tile
      const reward = e.target.classList[1];
      const category = e.target.classList[2]
      const tile = document.querySelector(`.${reward}.${category}`);
      const btn = e.target;
      
      tile.style.opacity = "0";
      btn.style.opacity = "0";
      // timeout is used so that the transition event is seen
      setTimeout(() => {
        tile.style.visibility = "hidden";
        btn.style.visibility = "hidden";
      }, 1000);
    
      // dispatch acttion to remove it from state
      store.dispatch({type: "REMOVE_CATEGORY", payload: {
        reward: reward,
        removedCategory: category
      }}) 
    })

    j++;
  })
}

renderTilesAndButtons(persistedState);

/**
 * Function to create and drag and drop functionality with the reward tiles so they can be added to the board.
 * 
 * @param  {el} DOM_Element phony draggable tile that is only visible while user is dragging
*/
function dragElement (el) {
  // initialize positions
  let {pos1, pos2, pos3, pos4} = 0;

  // begin dragging function when mouse is pressed
  document.onmousedown = elementDrag;

  // initializes dragging functiioinality
  function elementDrag (e) {
    e.preventDefault();

    // fires if mouse is pressed on one of the tiles in the reward category
    if (e.target.classList.contains("parent-tile")) {
      // set mouse position
      pos3 = e.clientX;
      pos4 = e.clientY;
  
      // make phony drag tile visible
      el.style.opacity = "1";
      el.style.visibility = "visible";

      // set offset of mouse pos
      el.style.top = e.target.offsetTop + "px";
      el.style.left = e.target.offsetLeft + "px";
      
      // stop dragging and perform drop once mouse is lifted
      document.onmouseup = closeDrag;
      // otherwise drag element on the page
      document.onmousemove = dragEl;
    }
  }

  // drag functionality
  function dragEl (e) {
    // calculate the new mouse position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the phony tiles' new position:
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  // drop functioinality
  function closeDrag (e) {
    // make phony tile no longer visible
    el.style.opacity = "0";
    el.style.visibility = "hidden";

    // get where tile is dropped
    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    if (dropTarget.className === "category") {
      // get the reward tile element and its respective coordinates on board
      const tile = dropTarget.firstElementChild;
      const reward = tile.classList[1];
      const category = tile.classList[2];

      // dispatch action to add tile to board state
      store.dispatch({type: "ADD_CATEGORY", payload: {
        reward: reward,
        addedCategory: category
      }})

      // make them visible on the DOM
      const btn = document.querySelector(`.remove-btn.${reward}.${category}`);
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
      tile.style.visibility = "visible";
      tile.style.opacity = "1";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// add drag functionality to phony tile
dragElement(document.querySelector('#drag-tile'));
