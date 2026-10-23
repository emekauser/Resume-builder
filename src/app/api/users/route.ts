import { NextRequest, NextResponse } from 'next/server';
import db from '../dbConfig';
import { Users } from '@prisma/client';
import { decodeJWT, get500ResponseBody } from '../serverUtils';
import { TOKEN } from '../serverConstant';

export const GET = async (req: NextRequest) => {
  const token = req.cookies.get(TOKEN)?.value;

  try {

    if (!token) {
      return NextResponse.json(
        {
          error: {
            isError: true,
            message: 'Username is not provided',
            code: 400,
          },
        },
        { status: 400 }
      );
    }
    const { payload } = await decodeJWT(token);
    const user = await db.users.findFirst({
      where: {
        email: payload?.username as string,
      },
    });
    const {
      email,
      banned,
      phoneNumbers,
      hasImage,
      lastName,
      firstName,
      userId,
      lastSignInAt,
      gender,
    } = user as Users;

    return NextResponse.json({
      message: 'successful',
      isSuccessful: true,
      user: {
        email,
        banned,
        phoneNumbers,
        hasImage,
        lastName,
        firstName,
        userId,
        lastSignInAt,
        gender,
      },
    });
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};
export const PUT = async () => {};
export const DELETE = async () => {};
