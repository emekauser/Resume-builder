export enum TEMPLATES_ENUM {
  Prominent,
  Strong,
  Traditional,
  Smart,
  Trusted,
}

export type ServerError = {
  message: string;
  code?: number | null;
  hasError?: boolean;
  cause?: string;
};

export type CVTemplate={
  name: string;
  templateId: string;
  tag?: string;
  isSelected?: boolean;
}



export type CatchBlockError={ message: string; stack: unknown }

export interface IJob {
  id?: number |string;
  jobTitle: string;
  // startDate:string
  // endDate:string
  endMonth:string;
  endYear:string
  startMonth:string;
  startYear:string;
  employerName?: string;
  city?: string;
  country?:string
  achievements?: [];
  jobResponsibilities?: string;
}