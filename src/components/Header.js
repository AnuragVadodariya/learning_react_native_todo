import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>TO DO'S</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 30,
    backgroundColor: "#e27d60"
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2.33rem",
    color: "#fff"
  }
});
