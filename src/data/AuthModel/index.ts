export enum AuthMode {
  LOGIN = 'login',
  REGISTER = 'register'
}

export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: string | null;
  error: string | null;
  message: string | null;
  isLoading: boolean;
}

export interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export enum AuthActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
  LOGOUT = 'LOGOUT',
  SET_LOADING = 'SET_LOADING',
  CLEAR_MESSAGE = 'CLEAR_MESSAGE'
}

export type AuthAction =
  | { type: AuthActionType.LOGIN_SUCCESS; payload: string }
  | { type: AuthActionType.LOGIN_ERROR; payload: string }
  | { type: AuthActionType.REGISTER_SUCCESS; payload: string }
  | { type: AuthActionType.REGISTER_ERROR; payload: string }
  | { type: AuthActionType.LOGOUT }
  | { type: AuthActionType.SET_LOADING; payload: boolean }
  | { type: AuthActionType.CLEAR_MESSAGE };

export interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}