import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./Content.styles";

// expo components
import Checkbox from "expo-checkbox";
import { Colors } from "react-native/Libraries/NewAppScreen";

type TodoItem = {
  id: number;
  text: string;
  checked: boolean;
  editing?: boolean;
};

type TodoItems = TodoItem[];

const Content = () => {
  const inputRef: React.RefObject<any>[] = [];

  const [todoItems, setTodoItems] = useState<TodoItems>([
    {
      id: 1,
      text: "Item 1",
      checked: true,
      editing: false,
    },
    {
      id: 2,
      text: "Item 2",
      checked: false,
      editing: false,
    },
    {
      id: 3,
      text: "Item 3",
      checked: false,
      editing: false,
    },
  ]);

  return (
    <View style={styles.container}>
      {todoItems &&
        todoItems.map((item: TodoItem, index: number) => {
          return (
            <TouchableOpacity
              style={[
                styles.todoItem,
                item.checked && styles.todoItem.checked,
                index === 0 && styles.todoItem.first,
              ]}
              key={item.id}
              onPressOut={() => {
                let todos: TodoItems = todoItems.map((todoItem: TodoItem) => {
                  todoItem.editing = false;
                  if (todoItem.id === item.id) todoItem.editing = true;
                  return todoItem;
                });
                setTodoItems([...todos]);
              }}
            >
              <Checkbox
                value={item.checked}
                color={Colors.primary}
                onTouchEnd={() => {
                  let todos: TodoItems = todoItems.map((todoItem: TodoItem) => {
                    if (todoItem.id === item.id) {
                      todoItem.checked = !todoItem.checked;
                    }
                    return todoItem;
                  });
                  setTodoItems([...todos]);
                }}
              />
              {item.editing ? (
                <TextInput
                  style={styles.textInput}
                  value={item.text}
                  autoFocus={true}
                  onChangeText={(text: string) => {
                    let todos: TodoItems = todoItems.map(
                      (todoItem: TodoItem) => {
                        if (todoItem.id === item.id) {
                          todoItem.text = text;
                        }
                        return todoItem;
                      }
                    );
                    setTodoItems([...todos]);
                  }}
                />
              ) : (
                <Text style={styles.text}>{item.text}</Text>
              )}
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default Content;
