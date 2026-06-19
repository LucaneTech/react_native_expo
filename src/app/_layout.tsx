import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';



const StackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#008080" />
      <Stack>
        
     
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: true,
          }}
        />
        
     
        
      </Stack>
    </>
  );
};

export default StackNavigator;