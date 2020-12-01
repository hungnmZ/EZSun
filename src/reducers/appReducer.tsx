export interface IUserType  {
  id: string;
  displayName: string;
  email: string;
}

export enum AppActionType {
  AUTH_CHANGE = 'AUTH_CHANGE',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export interface InitialStateType  {
  isInitializing: boolean;
  isSignout: boolean;
  auth: IUserType | null;
}

export type AppActionTypes =
  | { type: AppActionType.AUTH_CHANGE; auth: {} | null }
  | { type: AppActionType.SIGN_IN; token: string | null | undefined; auth: IUserType | null }
  | { type: AppActionType.SIGN_OUT; token: string | null | undefined; auth: IUserType | null };

export const appStateReducer = (state: InitialStateType, action: AppActionTypes) => {
  switch (action.type) {
    case AppActionType.AUTH_CHANGE:
      return {
        ...state,
        auth: action.auth,
        isInitializing: false,
      };
    case AppActionType.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        auth: action.auth,
      };
    case AppActionType.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        auth: null,
      };
    default:
      throw new Error('Unknown action');
  }
};
