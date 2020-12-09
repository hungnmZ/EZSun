import httpService from '../services/http.service';

export default {
    getSearchProduct: async (productName: string) => {
        return await httpService.get(
            `https://api.sunsale.vn/api/v1/pages/search/products?name=${productName}&page=1&quantity=20`,
        );
    },
};
