import {Plugin, Request} from '@blinkk/root';

export type AuthRequest = Request & {
  user?: string;
}

export interface AuthOptions {}

export function auth(options: AuthOptions): Plugin {
  return {
    name: 'auth-plugin',
    configureServer: (server) => {
      server.use((req, res, next) => {
        console.log('auth plugin');
        next();
      });
    },
  };
}
