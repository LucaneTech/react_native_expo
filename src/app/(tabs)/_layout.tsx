import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from 'expo-router';
import React from 'react';

const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={size || 24} 
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Shop"
        options={{
          title: 'Boutique',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "storefront" : "storefront-outline"} 
              size={size || 24} 
              color={color}
            />
          ),
        }}
      />

      {/* Ajoutez d'autres onglets si nécessaire */}
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Panier',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "cart" : "cart-outline"} 
              size={size || 24} 
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={size || 24} 
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigator;