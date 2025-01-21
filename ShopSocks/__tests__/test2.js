import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignUpScreen from '../src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../src/useUsersSET', () => jest.fn()); // Mock the useUsersSET function
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(), // Mock navigation
        }),
    };
});

describe('SignUpScreen', () => {
    it('calls setIsAuthenticated and navigates to Home on SignUp button press', () => {
        const mockSetIsAuthenticated = jest.fn();

        const { getByTestId } = render(
            <NavigationContainer>
                <SignUpScreen setIsAuthenticated={mockSetIsAuthenticated} />
            </NavigationContainer>
        );

        // Find the Sign Up button
        const signUpButton = getByTestId('signUpButton');

        // Simulate button press
        fireEvent.press(signUpButton);

        // Verify that setIsAuthenticated is called
        expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
    });
});
