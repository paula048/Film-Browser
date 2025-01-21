import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../src/screens/LoginScreen';
import SettingsScreen from '../src/screens/SettingsScreen';
import SignUpScreen from '../src/screens/SignUpScreen';

// Mock the useUsers hook
jest.mock('../src/useUsers', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    error: null,
    loading: false,
    jsonResponse: [
      { name: 'testUser', email: 'test@example.com', password: 'password123' },
    ],
  })),
}));

describe('Navigation', () => {
  test('should trigger login button click', () => {
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

  test('click Button - go to SignUp forms', () => {
    const mockSetIsAuthenticated = jest.fn();

    // Given
    const { getByTestId } = render(
      <NavigationContainer>
        <LoginScreen setIsAuthenticated={mockSetIsAuthenticated} />
      </NavigationContainer>
    );

    const goTo = getByTestId('goToSignUp');

    // When
    fireEvent.press(goTo);

    // Then
    expect(mockSetIsAuthenticated).not.toHaveBeenCalled(); // Assuming no valid user data was set
  });

  test('click Button Log Out', () => {
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
});
