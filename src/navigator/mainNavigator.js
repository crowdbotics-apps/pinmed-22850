import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps176701Navigator from '../features/Maps176701/navigator';
import BlankScreen77176696Navigator from '../features/BlankScreen77176696/navigator';
import ArticleList176694Navigator from '../features/ArticleList176694/navigator';
import Maps176681Navigator from '../features/Maps176681/navigator';
import UserProfile176676Navigator from '../features/UserProfile176676/navigator';
import Maps176657Navigator from '../features/Maps176657/navigator';
import Settings176635Navigator from '../features/Settings176635/navigator';
import Settings176620Navigator from '../features/Settings176620/navigator';
import NotificationList176619Navigator from '../features/NotificationList176619/navigator';
import Maps176618Navigator from '../features/Maps176618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps176701: { screen: Maps176701Navigator },
BlankScreen77176696: { screen: BlankScreen77176696Navigator },
ArticleList176694: { screen: ArticleList176694Navigator },
Maps176681: { screen: Maps176681Navigator },
UserProfile176676: { screen: UserProfile176676Navigator },
Maps176657: { screen: Maps176657Navigator },
Settings176635: { screen: Settings176635Navigator },
Settings176620: { screen: Settings176620Navigator },
NotificationList176619: { screen: NotificationList176619Navigator },
Maps176618: { screen: Maps176618Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
