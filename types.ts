
export type QuestionType = 'mcq' | 'true-false' | 'short-answer';

export interface TrueFalseStatement {
  text: string;
  a: boolean;
}

export interface Question {
  id: number | string;
  classTag: string;
  part: string;
  type: QuestionType;
  question: string;
  o?: string[]; 
  a?: string;   
  s?: TrueFalseStatement[];
  shuffledOptions?: string[]; 
  explanation?: string;
}

export interface ExamConfig {
  id: string;
  title: string;
  time: number;
  mcqPoints: number;
  tfPoints: number;
  saPoints: number;
  gradingScheme: number;
  mintime?: number;
  tabLimit?: number;
  closeDate?: string;
}

/* Added missing types to fix compilation errors */

export interface Student {
  sbd: string;
  name: string;
  class: string;
  school: string;
  phoneNumber: string;
  stk?: string;
  bank?: string;
  limit: number;
  limittab: number;
  idnumber: string;
  taikhoanapp?: string;
  className?: string;
}

export interface AppUser {
  phoneNumber: string;
  isVip: boolean;
  vip?: string;
}

export interface FixedConfig {
  duration: number;
  numMC: number[];
  scoreMC: number;
  mcL3: number[];
  mcL4: number[];
  numTF: number[];
  scoreTF: number;
  tfL3: number[];
  tfL4: number[];
  numSA: number[];
  scoreSA: number;
  saL3: number[];
  saL4: number[];
}

export interface ExamCodeDefinition {
  code: string;
  name: string;
  topics: 'manual' | number[];
  fixedConfig: FixedConfig;
}

export interface UserAnswer {
  questionId: string | number;
  answer: any;
}

export interface ExamResult {
  type: 'quiz' | 'exam';
  timestamp: string;
  examCode: string;
  sbd: string;
  name: string;
  className: string;
  school: string;
  phoneNumber: string;
  score: number;
  totalTime: number;
  stk: string;
  bank: string;
  tabSwitches: number;
  details: UserAnswer[];
}

export interface ClassInfo {
  id: string;
  grade: number;
  title: string;
  description: string;
  schedule: string;
  link: string;
}

export interface ScheduleGrid {
  days: string[];
  classNames: string[];
  cells: Record<string, string>;
}

export interface DocumentItem {
  id: number;
  title: string;
  type: string;
  date: string;
  downloadUrl: string;
}

export interface HeroData {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export interface ContactData {
  phone: string;
  email: string;
  address: string;
}

export interface RatingData {
  average: number;
  total: number;
  breakdown: Record<number, number>;
}

export interface Topic {
  id: number;
  name: string;
}

export interface NewsItem {
  title: string;
  link: string;
}
