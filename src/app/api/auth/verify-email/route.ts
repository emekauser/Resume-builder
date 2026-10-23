
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { COMPANY_NAME } from '@/app/globalConstants';
import { get500ResponseBody,   } from '../../serverUtils';
import db from '../../dbConfig';

export const POST = async (req: NextRequest) => {
  try {
    // HANDLES EMAIL VERIFICATION BY TOKEN
    const body = await req.json();

    const emailVerificationCode = body.emailVerificationCode;
    if (!emailVerificationCode) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: 'Email verification token not provided',
            status: 400,
            code: 'email_verification_token',
          },
        },
        { status: 400 }
      );
    }

    const processObject = await db.process.findFirst({
      where: {
        processId: emailVerificationCode,
        processType: ProcessType.EMAIL_VERIFICATION,
      },
    });

    if (!processObject) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            tokenIsValid: true,
            message: 'Invalid email verification token',
            status: 400,
            code: 'email_verification_token_invalid',
            cause: [
              'Maybe the token has expire',
              `The token was not created by ${COMPANY_NAME} server`,
            ],
          },
        },
        { status: 400 }
      );
    }

    const { userId, expiration } = processObject;
    const tokenHasExpired = new Date(expiration).getTime() < Date.now();
    if (tokenHasExpired) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: 'Email verification token has expired',
            status: 400,
            code: 'verification_token_expired',
          },
        },
        { status: 400 }
      );
    }

    const user = await db.user.update({
      where: {
        userID: userId,
      },
      data: {
        hasVerifyEmail: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: [
              'userId of matching process did not match any user in the user table',
            ],
            status: 400,
            code: 'fake_userId_in_process',
          },
        },
        { status: 400 }
      );
    }
    const { email, userID, firstName, lastName, role } = user;
    const payload = {
      email,
      userID,
      firstName,
      lastName,
      role,
    };
    const jwt = await createJsonWebToken(
      payload,
      `${COOKIE_EXPIRATION_IN} minutes`
    );
    (await cookies()).set(SESSION_TOKEN_KEY, jwt, {
      secure: true,
      sameSite: 'strict',
      maxAge: COOKIE_EXPIRATION_IN,
    });
    //LOOK @ ME 
    // await db.process.delete({
    //   where: {
    //     processId: emailVerificationCode,
    //     // processType: ProcessType.EMAIL_VERIFICATION,
    //   },
    // });

    return NextResponse.json({
      message: 'Email verification is successful.',
      isVerificationSuccess: true,
    });
  } catch (error: any) {
    return NextResponse.json(get500ResponseBody(error), { status: 500 });
  }
};
