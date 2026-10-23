'use client';
import InputElement from '@/app/components/ui/inputElement/InputElement';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import styles from './signIn.module.css';
import useAPIs from '@/app/components/hooks/useAPIs';
import Button from '@/app/components/ui/Button';
import { AUTH_BASE_PATH } from '@/app/urlPath';
import { ServerError } from '@/app/types';
import {
  isValidPassword,
  emailIsNotValid,
  logClientError,
} from '@/app/utils/utils';
import AuthSignIn from './authLogin/AuthButtons';
import { Icons } from '@/app/components/asset';
import {
  FORM_PASSWORD_SIZE,
  passwordErrorMsg,
  PRIMARY_COLOR,
} from '@/app/globalConstants';
import { useRouter } from 'next/navigation';
import { appLicationError } from '@/app/errorCode';
import { formDataError, initialFormState } from '../constant';

const { CheckIcon } = Icons;
const { UNABLE_TO_FETCH } = appLicationError;

const serverR = {
  data: {},
};

type ServerResponse = {
  data?: null | {
    message?: string;
    status?: number;
    created?: boolean;
    emailAlreadyExist?: boolean;
    username?: string;
    firstName?: string;
  };
  error?: null | ServerError;
  status?: number;
};
const Continue = 'Continue';

//Form Type
const CREATE_ACCOUNT = 'create_account';
const LOGIN = 'login';

const { code } = UNABLE_TO_FETCH;
type UserStatus = typeof LOGIN | typeof CREATE_ACCOUNT | null;

const ServerErrorMessage: FC<{ message?: string }> = ({ message }) => {
  if (message) {
    return <p className={styles.serverErr}>{message}</p>;
  }
  return <></>;
};

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const { fetchData, loading } = useAPIs();
  const [serverResponse, setServerResponse] = useState<ServerResponse | null>(
    serverR
  );
  const [nextStep, setNextStep] = useState<UserStatus>(null);
  const [formFormDataError, setFormDataError] = useState(formDataError);
  const handleChange = (e: any) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleCatchError = (error: unknown) => {
    setServerResponse({
      error: {
        message: 'Unable to reach the server',
        code: code,
        hasError: true,
      },
    });
    logClientError({
      message: (error as ServerError).message,
      code: code,
    });
  };

  // LOOKUP USER
  const lookUp = async () => {
    try {
      const emailHasError = emailIsNotValid(formData.email);
      if (emailHasError) {
        setFormDataError((oldState) => ({
          ...oldState,
          emailError: emailHasError
            ? 'Email should be in this format eg example@domain.com'
            : '',
        }));
        return;
      }

      const res = await fetchData(`${AUTH_BASE_PATH}/lookup`, {
        method: 'POST',
        body: formData,
      });
      console.log('res', res);
      const { data } = res as ServerResponse;
      switch (res.status) {
        case 200:
          // When exist
          setNextStep(LOGIN);
          setServerResponse((oldState) => ({
            ...oldState,
            data: {
              username: data?.username,
              firstName: data?.firstName,
            },
          }));
          break;
        case 404:
          // if no for this email exist, create a new one
          setNextStep(CREATE_ACCOUNT);
          setFormData((state) => ({
            ...state,
            email: data?.username as string,
          }));
          break;

        default:
          // handles 400 , 500 and other status codes.
          setServerResponse((state) => ({
            ...state,
            error: {
              message: res.error?.message as string,
            },
          }));
          break;
      }
    } catch (error) {
      handleCatchError(error);
    }
  };

  const login = async () => {
    const passwordHasError = isValidPassword(formData.password);
    if (passwordHasError) {
      setFormDataError((oldState) => ({
        ...oldState,
        passwordError: passwordHasError ? passwordErrorMsg() : '',
      }));
      return;
    }
    try {
      const res = await fetchData(`${AUTH_BASE_PATH}/login`, {
        method: 'POST',
        body: formData,
      });

      switch (res.status) {
        case 200:
          router.push('/');
          break;

        case 404:
          // if user dose not exist.
          setNextStep(CREATE_ACCOUNT);
          setFormData((state) => ({
            ...state,
            email: formData.email,
          }));
          break;
        default:
          // handles 400 , 500 and other status codes.
          setServerResponse((state) => ({
            ...state,
            error: {
              message: res.error?.message as string,
            },
          }));
          break;
      }
    } catch (error) {
      handleCatchError(error);
    }
  };

  // CREATE ACCOUNT
  const createAccount = async () => {
    try {
      const res = await fetchData(`${AUTH_BASE_PATH}/signup`, {
        method: 'POST',
        body: formData,
      });

      const { data } = res as ServerResponse;
      switch (res.status) {
        case 201:
          // when account is created successfully
          router.push('/verify-email');
          break;
        case 404:
          // if user dose not exist.
          setNextStep(CREATE_ACCOUNT);
          setFormData((state) => ({
            ...state,
            email: data?.username as string,
          }));
          break;
        case 409:
          // if user already exist
          setNextStep(LOGIN);
          setServerResponse((oldState) => ({
            ...oldState,
            data: {
              username: data?.username,
              firstName: data?.firstName,
            },
          }));
          setFormData(initialFormState);
          break;

        default:
          // handles 400 , 500 and other status codes.
          setServerResponse((state) => ({
            ...state,
            error: {
              message: res.error?.message as string,
            },
          }));
          break;
      }
    } catch (error) {
      handleCatchError(error);
    }
  };

  const { error } = serverResponse as ServerResponse;
  const { email, lastName, firstName, password } = formData;
  const { emailError, passwordError } = formFormDataError;

  console.log('email', email); ////
  const checkUserStatus = (status: UserStatus) => {
    switch (status) {
      case CREATE_ACCOUNT:
        return (
          <>
            <h2>Let&apos;s make you a member</h2>
            <ServerErrorMessage message={error?.message} />
            <InputElement
              placeholder="Enter your email address"
              label="What's your email ?"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div className={styles.names}>
              <InputElement
                placeholder="First name"
                label="First name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
              <InputElement
                placeholder="Last name (Optional)"
                label="Last name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputElement
                placeholder="Your password"
                label="Set a password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
              />
              <p className={styles.passwordValidation}>
                <CheckIcon
                  style={{
                    color: `${
                      password.length >= FORM_PASSWORD_SIZE
                        ? PRIMARY_COLOR
                        : 'gray'
                    } `,
                  }}
                />
                Your password should be at least {FORM_PASSWORD_SIZE} characters
              </p>
            </div>

            <button
              type="button"
              onClick={createAccount}
              className={styles.continue}
            >
              Create account
            </button>
          </>
        );
      case LOGIN:
        return (
          <>
            <h2>Welcome back, {serverResponse?.data?.firstName}.</h2>
            <ServerErrorMessage message={error?.message} />

            <div className={styles.existingMember}>
              <span>Email address</span>
              <div className={styles.flexbox}>
                <span className={styles.mail}>
                  {serverResponse?.data?.username as string}
                </span>
                <button
                  className={styles.flexbox}
                  onClick={() => {
                    setNextStep(null);
                    setFormData((oldState) => ({
                      ...oldState,
                      email: serverResponse?.data?.username as string,
                    }));
                  }}
                >
                  Change
                </button>
              </div>
            </div>
            <div>
              <InputElement
                placeholder="Your password"
                label="Please enter your password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
              />
              {passwordError ? <p className="error">{passwordError}</p> : null}
            </div>

            <Link href={'/reset-password'} className={styles.forgetPassword}>
              Forgot Password?
            </Link>
            <button type="button" className={styles.continue} onClick={login}>
              {Continue}
            </button>
          </>
        );
      default:
        return (
          <>
            <h2>Sign In</h2>
            <ServerErrorMessage message={error?.message} />

            <p>Sign In so we can save your CV</p>
            <div>
              <InputElement
                placeholder="Enter your email address"
                label="What's your email ?"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {emailError ? <p className="error">{emailError}</p> : ''}
            </div>

            <Button
              onClick={lookUp}
              loading={loading}
              className={styles.continue}
            >
              {Continue}
            </Button>
          </>
        );
    }
  };
  return (
    <>
      <div className={`form ${styles.loginForm}`}>
        {checkUserStatus(nextStep)}
        <AuthSignIn linePosition="top" />
      </div>
    </>
  );
};

export default SignIn;

{
  /* <p className={styles.policy}>
              By tapping "Create account", you acknowledge that you have read
              the
              <Link href={'/privacyPolicy'}> Privacy Policy</Link> and agree to
              the <Link href={'/termsOfService'}>Terms of Service</Link>.
            </p> */
}
