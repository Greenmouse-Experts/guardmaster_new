export interface QuestionItemType{
        id: string,
        question: string,
        options: string[] | number[],
        correctOption: number,
        point: number,
        isPublished: boolean
}