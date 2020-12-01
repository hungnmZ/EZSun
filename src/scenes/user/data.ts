import { LayoutItem } from '../../model/layout-item.model';

export interface AuthData extends LayoutItem {
  route: string;
}

export const data: AuthData[] = [
  {
    title: 'Tài khoản',
    image: require('../../assets/images/image-layout-article-1.jpg'),
    route: 'TaiKhoan',
  },
  {
    title: 'Lưu trữ',
    image: require('../../assets/images/image-layout-article-2.jpg'),
    route: 'LuuTru',
  },
  {
    title: 'Cài đặt',
    image: require('../../assets/images/image-layout-article-3.jpg'),
    route: 'CaiDat',
  }
];
