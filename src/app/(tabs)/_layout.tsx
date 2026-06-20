import { Tabs } from 'expo-router';
import React from 'react';
import {Ionicons} from "react-native-vector-icons/ionicons";


const TabsNavigator = () => {
  return (
    <>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#008080",
        }}
        
      >


        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />


        <Tabs.Screen
          name="Shop"
          options={{
            title: 'Boutique',
            headerTintColor: '#008080',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTitleStyle: {
              fontWeight: '700',
              color: '#008080',
            },
            headerShown: false,
            tabBarIcon({focused, color}) {
              <Ionicons name="shield" size={40} color="#008080"/>
            },
          }}
        />

      </Tabs>
    </>
  );
};

export default TabsNavigator;