import {NavigationProp, RouteProp} from '@react-navigation/native';

declare global {
  export interface RouteSetting {
    route: RouteProp<any, any>;
    navigation: NavigationProp<any>;
  }

  export interface ItemFlatList<T> {
    item: T;
    index: number;
  }
}

export {};
