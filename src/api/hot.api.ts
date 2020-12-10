import httpService from '../services/http.service';

export default {
    getHotProduct: async () => {
        return await httpService.get(
            'https://api.sunsale.vn/api/v1/pages/get/list_flashdeal?page=9&quantity=30',
        );
    },
};
