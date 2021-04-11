import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const TodoAdd = ({ submitHandler }) => {
  const [todo, setTodo] = useState("");
  return (
    <View style={styles.body}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="e.g. Play FootBall"
          onChangeText={(val) => {
            setTodo(val);
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="add todo"
          onPress={() => {
            submitHandler(todo);
          }}
          color="#659dbd"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 2,
    borderRadius: 7,
    padding: 15
  },
  btn: {
    marginTop: 20,
    padding: 10,
    borderRadius: 7
  }
});
