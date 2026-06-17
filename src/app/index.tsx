import React from "react";
import { Text, TextInput, View, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image 
          source={require("../../assets/images/logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="votre@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput 
            style={styles.input} 
            placeholder="••••••••"
            secureTextEntry={true}
          />

          {/* Utilisation de Link avec un composant cliquable customisé pour le bouton */}
          <Link href="/" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Envoyer</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View  style={styles.bull1}/>
      <View  style={styles.bull2}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  },
  innerContainer: {
    width: "80%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 90,          // Largeur fixe obligatoire pour les images locales
    height: 90,         // Hauteur fixe obligatoire pour les images locales
    marginBottom: 15,
    marginHorizontal: "auto"
  },
  formContainer: {
    marginTop: 30,
    width: "100%",
  },
  title: {
    color: "#008080",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700", // Les string sont obligatoires pour les valeurs de fontWeight spécifiques
  },
  label: {
    fontSize: 14,
    color: "#008080",
    fontWeight: "500",
  },
  input: {
    padding: 12,
    borderRadius: 6,
    borderWidth: 1, 
    borderColor: "#ccc",
    marginVertical: 10,
    width: "100%",
    fontSize: 15,
    fontWeight:"300"
  },
  button: {
    backgroundColor: "#008080",
    padding: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bull1:{
    backgroundColor:"#008080",
    width: 150,
    height: 150,
    borderRadius: "50%",
    position: "absolute",
    bottom: -20,
    right:-30

  },
   bull2:{
    backgroundColor:"#008080",
    width: 150,
    height: 150,
    borderRadius: "50%",
    position: "absolute",
    top: -20,
    left:-30

  }
});