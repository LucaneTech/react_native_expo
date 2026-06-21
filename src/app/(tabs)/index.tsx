import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      {/* Image de fond */}
      <View className="absolute inset-0">
        <Image 
          source={require("@/assets/images/coffee.jpg")} 
          className="w-[200px] h-auto"
          resizeMode="cover"
        />
      </View>
      
      {/* Gradient overlay avec LinearGradient */}
      <LinearGradient
        colors={['black', 'transparent']}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}  
        end={{ x: 0, y: 0 }}    // Fin en haut
        className="absolute inset-0"
      />
      
     
    </SafeAreaView>
  );
}