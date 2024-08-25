export interface UserState {
  isLoggedIn: boolean;
}

export interface RootState {
  user: UserState;
}