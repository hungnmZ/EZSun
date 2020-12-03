import httpService from '../services/http.service';

export default {
    getHotProduct: async () => {
        return await httpService.get(
            'https://www.sunsale.vn/_next/data/MdQ0_M7ln95l5ZqaB8nyj/san-pham-hot.json',
        );
    },
};
