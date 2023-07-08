export class Question {
    constructor(public text: string,
                public possibleAnswers: string[],
                public correctAnswer: string,
                public userAnswer: string) {
    }
}
