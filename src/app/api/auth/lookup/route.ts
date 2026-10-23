import { NextRequest, NextResponse } from 'next/server';
import { checkIfEmailValid, get500ResponseBody } from '../../serverUtils';
import db from '../../dbConfig';
import { Users } from '@prisma/client';

// ~ /api/auth/look-up
export const POST = async (req: NextRequest) => {
  try {
    const { email }: Users = await req.json();
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
          // error:{
          message: 'user dose not exit',
          username: email,
          status: 404,
          // }
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: `User with this name ${email} already exit`,
      emailAlreadyExist: true,
      status: 200,
      username: email,
      firstName: user.firstName,
    });
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};
