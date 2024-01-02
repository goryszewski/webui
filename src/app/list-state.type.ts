import { Task } from './Task';

export type ListFetchingError = { status: number; message: string };

type IdleState = {
  state: 'idle';
};
type LoadingState = {
  state: 'loading';
};
type SuccessState<T> = {
  state: 'success';
  results: T[];
};
type ErrorState = {
  state: 'error';
  error: ListFetchingError;
};

export type ComponentListState<T> =
  | IdleState
  | LoadingState
  | SuccessState<T>
  | ErrorState;
