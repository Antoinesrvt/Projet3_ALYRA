const actions = {
  init: "INIT",
  setVoteStatus: 'SET_VOTE_STATUS',
  setWinningProposal: 'SET_WINNING_PROPOSAL',
  setVote: 'SET_VOTE'
};

const initialState = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
  owner: null,
  voteStatus: null,
  winningProposal: null,
  vote: null,
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    case actions.setVoteStatus:
      return{voteStatus: data};
    case actions.setWinningProposal:
      return{winningProposal: data};
    case actions.setVote:
      return{vote: data};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer
};
