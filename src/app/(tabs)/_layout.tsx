import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from "react-native";

const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          marginHorizontal: 'auto',
          alignSelf: 'center',
          maxWidth: 350,
          width: '100%',
          height: Platform.OS === 'ios' ? 75 : 60,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 8,
          backgroundColor: 'white',
          borderRadius: 40,
         
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center">
              <Ionicons 
                name={focused ? "home" : "home-outline"} 
                size={28} 
                color={color}
              />
              {focused && (
                <View className="w-5 h-1 bg-teal-600 rounded-full mt-1" />
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Shop"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center">
              <Ionicons 
                name={focused ? "storefront" : "storefront-outline"} 
                size={28} 
                color={color}
              />
              {focused && (
                <View className="w-5 h-1 bg-teal-600 rounded-full mt-1" />
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center">
              <Ionicons 
                name={focused ? "cart" : "cart-outline"} 
                size={28} 
                color={color}
              />
              {focused && (
                <View className="w-5 h-1 bg-teal-600 rounded-full mt-1" />
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center">
              <Ionicons 
                name={focused ? "person" : "person-outline"} 
                size={28} 
                color={color}
              />
              {focused && (
                <View className="w-5 h-[0.5px] bg-teal-600 rounded-full mt-1" />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigator;