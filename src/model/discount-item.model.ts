import { ImageSourcePropType } from 'react-native';
import { dateTimeFormat } from '../util/util';

export class DiscountItem {
    constructor(
        readonly _id: string,
        readonly image: string,
        readonly name: string,
        readonly start: number,
        readonly end: number,
        readonly code: string,
        readonly url: string,
        readonly uid: string,
    ) {}

    get getStartDate(): string {
        return dateTimeFormat(new Date(this.start * 1000));
    }

    get getEndDate(): string {
        return dateTimeFormat(new Date(this.end * 1000));
    }

    static get discountItemConverter() {
        return {
            toFirestore: function (ref) {
                return {
                    _id: ref._id,
                    image: ref.image,
                    name: ref.name,
                    start: ref.start,
                    end: ref.end,
                    code: ref.code,
                    url: ref.url,
                    uid: ref.uid,
                };
            },
            fromFirestore: function (snapshot, options) {
                const data = snapshot.data(options);
                return new DiscountItem(
                    data._id,
                    data.image,
                    data.name,
                    data.start,
                    data.end,
                    data.code,
                    data.url,
                    data.uid,
                );
            },
        };
    }
}
