import { ImageSourcePropType } from 'react-native';
import { currencyFormat } from '../util/util';

export class FlashSaleItem {
    constructor(
        readonly _id: string,
        readonly title: string,
        readonly image: object,
        readonly sale_price: number,
        readonly origin_price: number,
        readonly link: string,
    ) {}

    get formattedSalePrice(): string {
        return currencyFormat(this.sale_price);
    }

    get formattedOriginPrice(): string {
        return currencyFormat(this.origin_price);
    }

    get linkHandle(): string {
        const indexOfMainLink = this.link.indexOf('=http');
        return this.link;
    }
}
