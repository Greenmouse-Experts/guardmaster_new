export interface QuestionItemType {
  id: string;
  question: string;
  options: string[] | number[];
  correctOption: number;
  point: number;
  isPublished: boolean;
}

export interface QuestionAnswerAttemptType {
  assessmentQuestion: QuestionItemType;
  choice: number;
  id: string;
}

export interface QuestionAnswerItemType {
  attempt: QuestionAnswerAttemptType[];
  result: {
    percent: number;
    score: number;
    total: number;
  };
}
