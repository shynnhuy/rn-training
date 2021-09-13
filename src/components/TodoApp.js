import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { useTodoContext, TodoActions } from "../context/TodoContext";
import { Checkbox } from "./Checkbox";

const TodoItem = ({ content, done, onToggle }) => {
  return (
    <View style={styles.todoItem}>
      <Checkbox checked={done} onChange={onToggle} />
      <Text style={styles.todoContent}>{content}</Text>
    </View>
  );
};

export const TodoApp = () => {
  const [content, setContent] = useState("");
  const { todos, dispatch } = useTodoContext();

  const renderTodo = ({ item: todo }) => (
    <TodoItem {...todo} onToggle={() => toggle(todo.id)} />
  );

  const create = () => {
    if (!content) return;
    return dispatch({ type: TodoActions.ADD_TODO, payload: content });
  };

  const toggle = (id) =>
    dispatch({ type: TodoActions.TOGGLE_TODO, payload: id });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What you gonna do?"
          value={content}
          onChangeText={setContent}
        />
        <TouchableOpacity style={styles.inputBtn} onPress={create}>
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(todos) => `${todos.id}`}
        renderItem={renderTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  inputContainer: { flexDirection: "row", alignItems: "center" },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
  },
  inputBtn: {
    minWidth: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  todoContent: {
    marginLeft: 5,
  },
});
