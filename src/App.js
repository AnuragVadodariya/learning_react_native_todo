import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Header, TodoAdd, DisplayTodo } from "./components";

const App = () => {
  const [todo, setTodo] = useState([
    {
      item: "watch movie",
      key: "1"
    },
    {
      item: "play game",
      key: "2"
    }
  ]);
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key);
    });
  };
  const submitHandler = (text) => {
    setTodo((prevTodo) => {
      return [
        {
          item: text,
          key: Math.random().toString()
        },
        ...prevTodo
      ];
    });
  };
  return (
    <View style={styles.app}>
      {/* Header */}
      <Header />
      {/* Add Todo's */}
      <TodoAdd submitHandler={submitHandler} />
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <DisplayTodo todoItem={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
