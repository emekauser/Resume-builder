import { v4 as uuidv4 } from 'uuid';
import { ServerError } from '../types';
import { FORM_PASSWORD_SIZE } from '../globalConstants';

export const getUUID = () => {
  return uuidv4();
};
export const capitalize = (input: string) => {
  if (!input) return;
  // capitalize text
  return (input.slice(0, 1).toUpperCase() + input.slice(1)).trim();
};

export const emailIsNotValid = (email: string) => {
  if (!email) return true;
  // returns true if an email is not valid eg example@gmail.com
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
  return !EMAIL_REGEX.test(email);
};

export const isValidPassword = (password = ''): boolean => {
  if (password.length < FORM_PASSWORD_SIZE) {
    return true;
  }
  return false;
};
type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Headers = { [key: string]: string };

export function getFetchOption<T>(
  method: HttpMethods,
  body?: T,
  headers?: Headers,
  ...rest: unknown[]
) {
  if (method !== 'GET') {
    return {
      body: JSON.stringify(body),
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
      ...rest,
    };
  } else {
    return {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
      ...rest,
    };
  }
}

export const truncateWord = (words: string, numberOfCharacter = 80) => {
  if (!words) return '';
  if (words.length > numberOfCharacter) {
    return `${words.slice(0, numberOfCharacter)} ...`;
  }
  return words;
};

export const logClientError = (error: ServerError) => {
  console.error('ERROR', error);
};


export const createArrayOfAnySize = (
  size: number,
  startingFrom = 0,
  appendToEachElement?: string
) => {
  // eslint-disable-next-line prefer-const
  let array = [];
  if (appendToEachElement) {
    for (let count = startingFrom; count < size; count++) {
      array.push(`${count + 1} ${appendToEachElement}`);
    }
  } else {
    for (let count = startingFrom; count < size; count++) {
      array.push(`${count + 1}`);
    }
  }
  return array;
};