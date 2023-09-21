export interface PostParamsRequest<T> {
  url: string;
  clientParams: string;
  payload: T;
}
