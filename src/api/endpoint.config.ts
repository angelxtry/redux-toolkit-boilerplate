import { ENV_CONSTANT } from '../utils/constant';

export const END_POINT = (): { server: string } => {
  switch (process.env.TARGET_ENV) {
    case ENV_CONSTANT.PRODUCTION:
      return {
        server: '',
      };
    case ENV_CONSTANT.STAGING:
      return {
        server: '',
      };
    case ENV_CONSTANT.DEVELOPMENT:
      return {
        server: 'http://localhost:3030',
      };
    default:
      return {
        server: 'http://localhost:3030',
      };
  }
};

const API_PREFIX = 'partner';

interface Config {
  auth: {
    login(): string;
    getMe(): string;
  };
  company: {
    getCompany(companyId: string): string;
  };
  admin: {
    getManager(userId: string): string;
  };
}

const config: Config = {
  auth: {
    login: (): string => `${END_POINT().server}/${API_PREFIX}/users/sign_in.json`,
    getMe: (): string => `${END_POINT().server}/${API_PREFIX}/users/me.json`,
  },
  company: {
    getCompany: (companyId: string): string => `${END_POINT().server}/${API_PREFIX}/companies/${companyId}.json`,
  },
  admin: {
    getManager: (userId: string): string => `${END_POINT().server}/${API_PREFIX}/managers/${userId}.json`,
  },
};

export default config;
