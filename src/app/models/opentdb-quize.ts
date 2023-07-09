import { OpentdbQuizeItem } from './opentdb-quize-item';

export class OpentdbQuize {
    constructor(public response_code: number,
                public results: OpentdbQuizeItem[]) {
    }
}
