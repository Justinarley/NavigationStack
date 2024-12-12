import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>home</Text>
      <Button
        title="Boton para cambiar la pantalla"
        onPress={() => navigation.navigate("Config")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6FA",
  },
  texto: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "#333333",
    fontWeight: "bold",
  },
});

export default Home;