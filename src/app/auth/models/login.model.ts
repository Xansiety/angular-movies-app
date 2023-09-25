export interface LoginRequest {
  username: string | null;
  password: string | null;
}

export interface LoginResponse {
  success:       boolean;
  expires_at:    string;
  request_token: string;
}
