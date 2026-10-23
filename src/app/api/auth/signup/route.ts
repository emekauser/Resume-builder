import { NextRequest, NextResponse } from 'next/server';
import {
  generateRandomCharacter,
  get500ResponseBody,
  UserType,
  validateUserInput,
} from '../../serverUtils';
import { Users } from '@prisma/client';
import db from '../../dbConfig';
import bcrypt from 'bcrypt';
import {
  EMAIL_VERIFICATION_TOKEN_EXPIRATION,
  SALT_ROUND,
} from '../../serverConstant';
import { cookies } from 'next/headers';
import { EMAIL_VERIFICATION_CODE_SIZE } from '@/app/globalConstants';

export const POST = async (req: NextRequest) => {
  try {
    const { email, password, firstName, lastName }: Users = await req.json();
    const { isError, message } = validateUserInput({
      firstName,
      email,
      password,
    } as UserType);

    if (isError) {
      return NextResponse.json(
        {
          error: {
            isError: isError,
            message: message,
            code: 400,
          },
        },
        { status: 400 }
      );
    }

    const match = await db.users.findFirst({
      where: {
        email: email,
      },
    });

    if (match) {
      return NextResponse.json({
        message: `User with this name ${email} already exit`,
        status: 409, // conflict with existing status.
        username: email,
        firstName: firstName,
        emailAlreadyExist: true,
      });
    }
    const fourDigitCode = generateRandomCharacter(EMAIL_VERIFICATION_CODE_SIZE);
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    const user = await db.users.create({
      data: {
        email,
        password: hashedPassword,
        lastName,
        firstName,
        emailIsVerify: false,
        twoFactorEnabled: false,
        passwordEnabled: true,
        emailVerificationCode: fourDigitCode,
      },
    });
    if (!user) {
      throw Error(
        "We're sorry, something went wrong on the server. Please try later"
      );
    }
    // TODO -send email to the user for email verification, then send response
    cookies().set('user', user.email, {
      maxAge: EMAIL_VERIFICATION_TOKEN_EXPIRATION,
    });

    return NextResponse.json(
      {
        message: 'successful',
        status: 201,
        created: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};

/* 

    const jwt = await createJsonWebToken(
      {
        email: newUser.email,
        // emailVerificationCode,
        // id: newUserProcess.processId,
      },
      `${EMAIL_VERIFICATION_CODE_EXPIRATION_IN_SECONDS} minutes` // //expires in 30 minutes
    );

    await sendEmail(
      `${COMPANY_NAME} ${PLATFORM_EMAIL}`,
      email,
      `${COMPANY_NAME} Verification Code: ${emailVerificationCode}`,
      getSignUpEmailVerificationMessageByCode(emailVerificationCode, jwt)
    );
*/