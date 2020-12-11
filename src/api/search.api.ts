import httpService from '../services/http.service';

export default {
    getSearchProduct: async (productName: string, pageIndex) => {
        return await httpService.get(
            `https://api.sunsale.vn/api/v1/pages/search/products?name=${productName}&page=${pageIndex}&quantity=20`,
        );
    },
};
