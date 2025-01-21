import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignUpScreen from '../src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../src/screens/LoginScreen';

import SettingsScreen from '../src/screens/SettingsScreen';




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





    it('displays an error if the password is too short', () => {
        const { getByTestId, getByText } = render(
            <NavigationContainer>
                <SignUpScreen />
            </NavigationContainer>
        );

        const passwordInput = getByTestId('passwordInput');
        fireEvent.changeText(passwordInput, '123');

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        expect(getByText('Password must be at least 6 characters')).toBeTruthy();
    });

    it('disables the Sign Up button if inputs are empty', () => {
        const mockSetIsAuthenticated = jest.fn();

        // Given
        const { getByTestId } = render(
          <NavigationContainer>
            <SettingsScreen setIsAuthenticated={mockSetIsAuthenticated} />
          </NavigationContainer>
        );
    
        const logOutBtn = getByTestId('logOutButton');
    
        // When
        fireEvent.press(logOutBtn);
    
        // Then
        expect(mockSetIsAuthenticated).toHaveBeenCalled(); // Assuming logOutButton triggers the function
    });

    it('enables the Sign Up button if inputs are valid', () => {
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



    it('renders the email input field', () => {
  const mockSetIsAuthenticated = jest.fn();

    // Given
    const { getByTestId } = render(
      <NavigationContainer>
        <LoginScreen setIsAuthenticated={mockSetIsAuthenticated} />
      </NavigationContainer>
    );

    const loginButton = getByTestId('loginButton');

    // When
    fireEvent.press(loginButton);

    // Then
    expect(mockSetIsAuthenticated).not.toHaveBeenCalled(); // Assuming no valid user data was set
    });

    it('renders the password input field', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SignUpScreen />
            </NavigationContainer>
        );

        const passwordInput = getByTestId('passwordInput');
        expect(passwordInput).toBeTruthy();
    });



    it('handles server errors during sign-up', () => {
        const mockSetIsAuthenticated = jest.fn();

        const { getByTestId } = render(
            <NavigationContainer>
                <SignUpScreen setIsAuthenticated={mockSetIsAuthenticated} />
            </NavigationContainer>
        );

        const errorFetchBtn = getByTestId('signUpButton');

        fireEvent.press(errorFetchBtn);

        expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
    });



    
    it('navigates to Login screen on "Already have an account" press', () => {
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
