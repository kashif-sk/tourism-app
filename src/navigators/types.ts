import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type TabNavigator = {
  Home: undefined;
  Surfing: undefined;
  Hula: undefined;
  Volcano: undefined;
};

export type AppTabNavigatorProp = BottomTabNavigationProp<TabNavigator>;

//---Specifying default types globally---//
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabNavigator {}
  }
}
//---Specifying default types globally---//
