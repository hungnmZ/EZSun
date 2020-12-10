import httpService from '../services/http.service';

export default {
    getFlashSale: async () =>
        await httpService.get(
            'https://api.sunsale.vn/api/v1/pages/products/Shopee?page=1&quantity=50',
        ),
    getDiscount: async () =>
        await httpService.get(
            'https://www.sunsale.vn/_next/data/MdQ0_M7ln95l5ZqaB8nyj/ma-giam-gia.json?stage=0',
        ),
};
