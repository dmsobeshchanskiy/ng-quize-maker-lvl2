import { QuizeItemDTO } from './quize-item-DTO';

export class QuizeDTO {
    constructor(public response_code: number,
                public results: QuizeItemDTO[]) {
    }
}
