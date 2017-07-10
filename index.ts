
// Our application is keeping track of current player
interface IAppState {
  playerTurn: number;
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
interface IAction<P> extends IGenericAction<P, undefined> {}
type ChangePlayerAction = IAction<number>;

// Our reducer
function changePlayerReducer(
  state: IAppState,
  action: ChangePlayerAction
) {
  return {
    ...state,
    playerTurn: action.payload
  }
}
