import { NotificationItem } from '../../model/notification-item.model';

export interface NotificationData extends NotificationItem {
    route: string;
}

export const data: NotificationData[] = [
    {
        title: 'Tiki',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-in-1.jpg'),
        route: 'SignIn1',
        time: '18:22 26-11-20'
    },
    {
        title: 'Shopee',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-in-2.jpg'),
        route: 'SignIn2',
        time: '18:22 26-11-20'

    },
    {
        title: 'Lazada',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-in-3.jpg'),
        route: 'SignIn3',
        time: '18:22 26-11-20'

    },
    {
        title: 'Shopee',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-in-4.jpg'),
        route: 'SignIn4',
        time: '18:22 26-11-20'

    },
    {
        title: 'Lazada',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-in-5.jpg'),
        route: 'SignIn5',
        time: '18:22 26-11-20'

    },
    {
        title: 'Lazada',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-up-1.jpg'),
        route: 'SignUp1',
        time: '18:22 26-11-20'

    },
    {
        title: 'Thông báo',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-up-2.jpg'),
        route: 'SignUp2',
        time: '18:22 26-11-20'

    },
    {
        title: 'Thông báo',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-up-3.jpg'),
        route: 'SignUp3',
        time: '18:22 26-11-20'

    },
    {
        title: 'Thông báo',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-sign-up-4.jpg'),
        route: 'SignUp4',
        time: '18:22 26-11-20'

    },
    {
        title: 'Thông báo',
        description: 'Sản phẩm bạn đã lưu có flash sale lúc 12h',
        image: require('../../assets/images/image-layout-forgot-password.jpg'),
        route: 'ForgotPassword',
        time: '18:22 26-11-20'

    },
];
