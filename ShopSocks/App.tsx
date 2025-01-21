import React, {useState} from 'react';
import { View, Text, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./src/screens/HomeScreen";
import BrowserScreen from "./src/screens/BrowserScreen";
import FavoriteScreen from './src/screens/FavoriteScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';


import TabScreens from './src/screens/TabScreens';
import StackNav from './src/screens/StackNav';



// npx react-native@latest



// npm install react-native-screens
// npm install react-native/stack
// npm install @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <StackNav setIsAuthenticated={setIsAuthenticated} />
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login">
                        {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                    </Stack.Screen>
                    <Stack.Screen name="SignUp">
                        {(props) => <SignUpScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default App;