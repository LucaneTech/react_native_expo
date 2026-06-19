import React from 'react';
import { StatusBar } from 'react-native';
import Index from '.';
import Shop from './Shop';
import { Stack } from 'expo-router';

const screenOptions = {
  headerStyle: {
    backgroundColor: '#008080',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 18,
  },
  headerBackTitleVisible: false,
  animation: 'slide_from_right', // Animation iOS/Android
};

const StackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#008080" />
      <Stack>
        
     
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
          }}
        />
        
     
        <Stack.Screen 
          name="Shop" 
         
          options={{
            title: '🛍️ Boutique',
            headerTintColor: '#008080',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTitleStyle: {
              fontWeight: '700',
              color: '#008080',
            },
          }}
        />
        
      </Stack>
    </>
  );
};

export default StackNavigator;