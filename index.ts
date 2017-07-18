// Our application is keeping track of current player
interface IPlayerTurnState {
  id: number;
}

interface IAppState {
  playerTurn: IPlayerTurnState;
  stats: IStats;
  totalsMessage: string;
}

// We have an action with customisable payload and meta
// See http://davetayls.me/blog/2017/06/26/the-power-of-typescript-for-react-3-actions
interface IGenericAction<P, M> {

  // Our type is a const string
  type: string;

  // The payload can be anything but will be
  // specified for a particular action within
  // the app
  payload?: P;

  // The meta property can be used to send
  // further information along with the action
  // often used by redux middleware
  meta?: M;

  // This is a flag to tell if the payload
  // is an error
  error?: boolean;
}

// Our positive action and specific action to change player
// See http://davetayls.me/blog/2017/06/26/the-power-of-typescript-for-react-3-actions
interface IAction<P> extends IGenericAction<P, undefined> {
}
type ChangePlayerAction = IAction<number>;

// Some Current Stats
interface IStats {
  roomA: number;
  roomB: number;
}

// Our reducer
export function changePlayerReducer(
  state: IAppState,
  action: ChangePlayerAction
):IAppState {
  return {
    ...state,
    playerTurn: { id: action.payload || 0 }
  }
}

export function calculateTotalsReducer(
  state: IAppState,
  action: ChangePlayerAction
): IAppState {
  const { playerTurn, stats } = state;
  const player = getPlayer(playerTurn.id);
  return {
    ...state,
    totalsMessage: `Player ${player.name} has ${stats.roomA + stats.roomB} score across all rooms`
  };
}









// Players for us to show stats for
interface IPlayer {
  id: number;
  name: string;
}

const PLAYERS: { [key: number]: IPlayer } = {
  1: { id: 1, name: 'Fred' },
  2: { id: 2, name: 'Bob' }
};

function getPlayer(playerNumber: number) {
  return PLAYERS[playerNumber];
}










