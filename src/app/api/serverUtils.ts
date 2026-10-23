import { SignJWT, base64url, jwtDecrypt } from 'jose';
import { LOGIN_SESSION_EXPIRATION_TIME } from './serverConstant';
import { FORM_PASSWORD_SIZE } from '../globalConstants';
import { v4 as uuidv4 } from 'uuid';

export const get500ResponseBody = (error: {
  message: string;
  stack: unknown;
}) => {
  console.error(error);
  return {
    error: {
      hasError: true,
      message:
        "We're sorry, something went wrong on the server. Please try later",
      status: 500,
      cause: error.message,
      code: 'server_error',
      stack: error?.stack,
    },
  };
};

export const checkIfEmailValid = (email: string) => {
  if (!email) return true;
  // returns true if an email is not valid eg example@gmail.com
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
  return EMAIL_REGEX.test(email);
};

export const getJWTSigningSecret = () => {
  return base64url.decode(process.env.JWT_ENCRYPTION_SECRET as string);
};

export const decodeJWT = async (jwt: string) => {
  try {
    const { payload } = await jwtDecrypt(jwt, getJWTSigningSecret());
    return {
      payload: payload,
      tokenIsDecode: true,
      hasError: false,
      error: null,
    };
  } catch (error) {
    return { payload: null, tokenIsDecode: false, hasError: true, error };
  }
};

export const generateJWT = async (payload: {
  email?: string;
  userId?: string;
}) => {
  try {
    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(LOGIN_SESSION_EXPIRATION_TIME)
      .sign(getJWTSigningSecret());
    return {
      jwt,
      error: null,
    };
  } catch (error: unknown) {
    return {
      jwt: null,
      error: (error as { message: string; stack: unknown }).message,
    };
  }
};

export const emailIsNotValid = (email: string) => {
  if (!email) return true;
  // returns true if an email is not valid eg example@gmail.com
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
  return !EMAIL_REGEX.test(email.trim());
};

const isEmpty = (stringArg = '') => {
  return stringArg.trim().length === 0;
};

export type UserType = {
  firstName: string;
  email: string;
  password: string;
};

export const validateUserInput = (
  user: UserType,
  passwordSize: number = FORM_PASSWORD_SIZE
) => {
  // used by the sign up API to validate user information
  const { firstName, email, password } = user || {};
  const error = [];
  if (isEmpty(firstName)) {
    error.push('First name must not be empty');
  }

  if (emailIsNotValid(email)) {
    error.push('Please provide a valid email e.g example@gmail.com');
  }
  if (isEmpty(password)) {
    error.push('Password must not be empty');
  }

  if (!isEmpty(password) && password.trim().length <= passwordSize) {
    error.push(`Password must be more than ${FORM_PASSWORD_SIZE} characters`);
  }

  return {
    isError: Boolean(error.length),
    message: error,
  };
};

export const generateRandomCharacter = (size = 4) => {
  return uuidv4().slice(0, size); // new implementation
  //return String(Math.ceil(Number(Math.random().toFixed(4)) * 10000));// old implementation
};
