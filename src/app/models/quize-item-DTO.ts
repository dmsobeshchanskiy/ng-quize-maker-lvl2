export class QuizeItemDTO {

    constructor(public category: string,
                public correct_answer: string,
                public difficulty: string,
                public incorrect_answers: string[],
                public question: string,
                public type: string) {}

}
