import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import BrowserScreen from "./BrowserScreen";
import FavoriteScreen from './FavoriteScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();


interface TabScreensProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabScreens: React.FC<TabScreensProps> = ({ setIsAuthenticated }) => {

    return(
        <Tab.Navigator initialRouteName="Home">

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Browser" component={BrowserScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ tabBarBadge: 3 }}/>
            <Tab.Screen name="Settings">
                            {(props) => <SettingsScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Tab.Screen>
        </Tab.Navigator>)
}

export default TabScreens;