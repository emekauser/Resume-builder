import { NextRequest, NextResponse } from 'next/server';
import {
  checkIfEmailValid,
  generateJWT,
  get500ResponseBody,
} from '../../serverUtils';
import { Users } from '@prisma/client';
import db from '../../dbConfig';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { TOKEN } from '../../serverConstant';

export const POST = async (req: NextRequest) => {
  try {
    const { email, password }: Users = await req.json();

    if (!checkIfEmailValid(email)) {
      return NextResponse.json(
        {
          message: 'Please provide a valid email formate eg example@domain.com',
          status: 400,
        },
        {
          status: 400,
        }
      );
    }
    const user = await db.users.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: 'user dose not exit',
          status: 404,
        },
        { status: 404 }
      );
    }
    const isMatch = await bcrypt.compare(password, user?.password as string);
    if (!isMatch) {
      return NextResponse.json(
        {
          message: 'Invalid password',
          status: 400,
        },
        {
          status: 400,
        }
      );
    }
    const oneDay = 24 * 60 * 60 * 1000;

    const { jwt, error } = await generateJWT({
      email: email,
    });

    if (!jwt) {
      throw Error(`${error}`);
    }

    cookies().set(TOKEN as string, jwt as string, {
      maxAge: oneDay,
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return NextResponse.json({
      message: 'successful',
      isSuccessFul: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};
