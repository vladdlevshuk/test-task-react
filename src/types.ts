export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface UserState {
  isLoggedIn: boolean;
  userData: any;
}

export interface RootState {
  user: UserState;
}

export {};