export interface PostParamsRequest<T> {
  url: string;
  params?: paramsInterface; // SEND IN THIS FORMAT: { key: value } EG params: { api_key: apiConfig.ApiKey },
  payload?: T;
}

export interface GetParamsRequest {
  url: string;
  params?: paramsInterface;
}

export interface paramsInterface {
  [key: string]: string;
}
