import 'express';

declare module 'express' {
  export interface Request {
    cookies: Record<string, string>; // cookies có dạng key-value
  }
}
