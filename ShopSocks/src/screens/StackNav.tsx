import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from './HomeScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import TabScreens from './TabScreens';

const Stack = createStackNavigator();


interface StackNavProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const StackNav: React.FC<StackNavProps> = ({ setIsAuthenticated }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeNav">
                {(props) => <TabScreens {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Film" component={ProductDetailsScreen} />
        </Stack.Navigator> 
    )
}

export default StackNav;