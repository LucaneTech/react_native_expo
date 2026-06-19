import { Tabs } from 'expo-router';
import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react-native'
import { Notification03Icon } from '@hugeicons/core-free-icons'

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

const TabsNavigator = () => {
  return (
    <>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#008080"
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
            tabBarIcon: () => {
              <HugeiconsIcon
                icon={Notification03Icon}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
            }
          }}
        />

      </Tabs>
    </>
  );
};

export default TabsNavigator;