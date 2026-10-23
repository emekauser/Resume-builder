import { NextResponse } from 'next/server';
import db from '../dbConfig';
import { get500ResponseBody } from '../serverUtils';
import { TEMPLATES_ENUM} from '@/app/types';

export const TEMPLATES = [
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Traditional],
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Strong],
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Trusted],
  },
];

export const GET = async () => {
  console.log('RUN')
  try {
    const templates = await db.templates.findMany();
    if (!templates) {
      throw Error('Something went wrong on the server');
    }

    return NextResponse.json({ msg: 'templates created', data: templates });
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};

export const POST = async () => {
  try {
    const templates = await db.templates.createMany({
      data: TEMPLATES,
    });
    if (!templates) {
      throw Error('Something went wrong on the server');
    }

    return NextResponse.json({ msg: 'templates created', data: templates });
  } catch (error) {
    return NextResponse.json(
      get500ResponseBody(error as { message: string; stack: unknown }),
      { status: 500 }
    );
  }
};
// ~> /api/templates
