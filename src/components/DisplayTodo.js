import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const DisplayTodo = ({ todoItem, pressHandler }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => pressHandler(todoItem.key)}>
        <Text style={styles.todoItem}>{todoItem.item}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  todoItem: {
    padding: 20,
    margin: 3,
    borderWidth: 2,
    borderRadius: 7,
    width: "15rem",
    textAlign: "center"
  }
});
