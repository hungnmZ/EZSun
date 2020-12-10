import { db, firebase } from '../firebase/config';
import { FlashSaleItem } from '../model/flashsale-item.model';
import { DiscountItem } from '../model/discount-item.model';

export default {
    saveFlashSale: (collection, data) => {
        db.doc(`${collection}/${data?._id}`)
            .withConverter(FlashSaleItem.flashSaleItemConverter)
            .set(data);
    },
    saveDiscountItem: (collection, data) => {
        db.doc(`${collection}/${data?._id}`)
            .withConverter(DiscountItem.discountItemConverter)
            .set(data);
    },
    getSaveItem: async (collection) => {
        const currUser = firebase.auth().currentUser;
        return await db
            .collection(collection)
            .where('uid', '==', currUser.uid)
            .get();
    },
};
