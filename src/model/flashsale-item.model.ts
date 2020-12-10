import { currencyFormat } from '../util/util';

export class FlashSaleItem {
    constructor(
        readonly _id: string,
        readonly sale_title: string,
        readonly image: string,
        readonly sale_price: number,
        readonly origin_price: number,
        readonly link: string,
        readonly uid: string,
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

    get getLabelTag(): string {
        let labelTag: string = 'SHOPEE';

        if (this.link.includes('shopee')) {
            labelTag = 'SHOPEE';
        }
        if (this.link.includes('tiki')) {
            labelTag = 'TIKI';
        }
        if (this.link.includes('lazada')) {
            labelTag = 'LAZADA';
        }

        return labelTag;
    }

    static get flashSaleItemConverter() {
        return {
            toFirestore: function (ref) {
                return {
                    _id: ref._id,
                    sale_title: ref.sale_title,
                    image: ref.image,
                    sale_price: ref.sale_price,
                    origin_price: ref.origin_price,
                    link: ref.link,
                    uid: ref.uid,
                };
            },
            fromFirestore: function (snapshot, options) {
                const data = snapshot.data(options);
                return new FlashSaleItem(
                    data._id,
                    data.sale_title,
                    data.image,
                    data.sale_price,
                    data.origin_price,
                    data.link,
                    data.uid,
                );
            },
        };
    }
}
