import {setEntries, next, vote, INITAL_STATE} from './core';

export default function reducer(state = INITAL_STATE, action) {
  // figure out which function to call and call it
  switch (action.type) {
    case 'SET_ENTRIES' :
      return setEntries(state, action.entries);
    case 'NEXT' :
      return next(state);
    case 'VOTE' :
      return state.update('vote', voteState => vote(voteState, action.entry));
  }
  return state;
}
