import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Comfig = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>configuracion</Text>
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

export default Comfig;