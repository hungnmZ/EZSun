import { ImageSourcePropType } from 'react-native';

export interface NotificationItem {
    title: string;
    description: string;
    time: string;
    image: ImageSourcePropType;
}
