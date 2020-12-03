import { ImageSourcePropType } from 'react-native';
import { currencyFormat } from '../util/util';

export class DiscountItem {
    constructor(
        readonly _id: string,
        readonly image: ImageSourcePropType,
        readonly name: string,
        readonly start: number,
        readonly end: number,
        readonly code: string,
    ) {}

    get getStartDate(): string {
        return new Date(this.start * 1000).toLocaleDateString();
    }

    get getEndDate(): string {
        return new Date(this.end * 1000).toLocaleDateString();
    }
}
