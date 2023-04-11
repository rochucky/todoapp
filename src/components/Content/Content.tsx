import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Content.styles";

// expo components
import Checkbox from "expo-checkbox";
import { FlashList } from "@shopify/flash-list";

type TodoItem = {
  id: number;
  text: string;
  checked: boolean;
};

type TodoItems = TodoItem[];

const Content = () => {
  const [todoItems, setTodoItems] = useState<TodoItems>([
    {
      id: 1,
      text: "Item 1",
      checked: true,
    },
    {
      id: 2,
      text: "Item 2",
      checked: false,
    },
    {
      id: 3,
      text: "Item 3",
      checked: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
      {todoItems &&
        todoItems.map((item: TodoItem, index: number) => (
          <TouchableOpacity
            style={[
              styles.todoItem,
              item.checked && styles.todoItem.checked,
              index === 0 && styles.todoItem.first,
            ]}
            key={item.id}
            onPressOut={() => {
              let todos: TodoItems = todoItems.map((todoItem: TodoItem) => {
                if (todoItem.id === item.id) {
                  todoItem.checked = !todoItem.checked;
                }
                return todoItem;
              });
              setTodoItems([...todos]);
            }}
          >
            <Checkbox value={item.checked} />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Content;
