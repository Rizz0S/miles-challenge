import { createStore } from 'redux';
import undoable from 'redux-undo';
import { loadState, persistState } from './localStorage.js';

// grab state from local storage, if applicable
export const persistedState = localStorage.getItem('boardState') 
                       ? loadState()
                       : initHistory

// set initial history to blank                       
let initHistory = {
  past:  [{
    r1: [],
    r2: [],
    r3: [],
    r4: [],
    r5: []
  }],
  present: { 
    r1: [],
    r2: [],
    r3: [],
    r4: [],
    r5: []
  },
  future: 
     [{
      r1: [],
      r2: [],
      r3: [],
      r4: [],
      r5: []
    }]  
}

// redux reducer to add and remove rewards from categories
function reducer(state = initHistory.present, action) {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      let {reward, addedCategory} = action.payload;
      return {
        ...state,
        [reward]: [...state[reward], addedCategory]
      }
    }
    case 'REMOVE_CATEGORY': {
      let {reward, removedCategory} = action.payload;
      let updatedCategories = state[reward].filter((cat) => cat !== removedCategory);
      return {
        ...state,
        [reward]: updatedCategories
      }
    }
    default:
      return state;
  }
}

// create redux store
// give reducer undoable and persist functionality
const store = createStore(undoable(reducer), persistedState)

// subscribe persist functionality to store
store.subscribe(()=>{
  persistState(store.getState());
});

export default store;
