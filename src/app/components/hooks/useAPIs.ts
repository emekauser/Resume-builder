import { ServerError } from '@/app/types';
import { DOMAIN } from '@/app/urlPath';
import { useState } from 'react';
import { CatchBlockError } from '../types';

type Error = ServerError;
type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Headers = { [key: string]: string };
type Options = {
  headers?: Headers;
  body?: unknown;
  method: HttpMethods;
};

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
export type FetchDateType = {
  data: null | unknown;
  error: null | Error;
  status?: number;
};

// type UseAPIType = {
//   enableLoadingState?: boolean;
// };

const useAPIs = (
  arg: {
    enableLoadingState?: boolean;
  } = { enableLoadingState: true }
) => {
  const { enableLoadingState } = arg;
  const [loading, setLoading] = useState(false);
  const [error] = useState<Error>();

  const fetchData = async (
    url: string,
    option?: Options,
    ...rest: unknown[]
  ): Promise<FetchDateType> => {
    const { body, method, headers } = (option as Options) || {};
    try {
      if (enableLoadingState) {
        setLoading(true);
      }

      const res = await fetch(
        `${DOMAIN}/${url.startsWith('/') ? url.replace('/', '') : url}`,
        getFetchOption(method, body, headers, rest)
      );
   
      if (res.ok) {
        const body = await res.json();
        return {
          data: { ...body },
          error: null,
          status: res.status,
        };
      }
      const result = await res.json();
      return {
        data: null,
        status: res.status,
        error: {
          message: result?.message || result?.error.message,
          code: res.status,
          hasError: true,
        },
      };
    } catch (error: unknown) {
      return {
        data: null,
        error: {
          message: 'Unable to fetch',
          code: 700,
          hasError: true,
          cause: ` ${
            (error as CatchBlockError).message ||
            'Unable to make request: It could be that you are not connected to internet or may the server is down'
          }  `,
        },
      };
    } finally {
      if (enableLoadingState) {
        setLoading(false);
      }
    }
  };

  return {
    fetchData,
    error,
    loading,
  };
};

export default useAPIs;
