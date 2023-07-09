import { OpentdbQuizItem } from './opentdb-quiz-item';

export class OpentdbQuiz {
    constructor(public response_code: number,
                public results: OpentdbQuizItem[]) {
    }
}
