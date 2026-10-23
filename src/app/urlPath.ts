type ENV = 'development' | 'production' | 'test';
const getDomain = (env: ENV) => {
  switch (env) {
    case 'development':
      return 'http://localhost:3040';
    case 'production':
      return 'http://localhost:3040';

    default:
      return 'http://localhost:3040';
  }
};
export const DOMAIN = getDomain(process.env.NODE_ENV);

export const  BASE_PATH= '/api'
export const AUTH_BASE_PATH=`${BASE_PATH}/auth`