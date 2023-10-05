import React from 'react';
import { AuthProvider } from './navigation/AuthContext';
import AppNavigator from './navigation/AppNavigator';
import { ContextProvider } from './navigation/contextState'

export default function App() {

  return (
    <ContextProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ContextProvider>
  );
}