import httpService from '../services/http.service';

export default {
    getFlashSale: async (pageIndex) => {
        return await httpService.get(
            `https://api.sunsale.vn/api/v1/pages/get/list_flashdeal?page=${pageIndex}&quantity=20`,
        );
    },
};
