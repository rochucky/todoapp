import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Touchable,
} from "react-native";
import styles from "./Content.styles";
import Colors from "../../../utils/colors";

// expo components
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TodoItem = {
  id: number;
  text: string;
  checked: boolean;
  editing?: boolean;
};

type TodoItems = TodoItem[];

const getTodos = async () => {
  try {
    console.log("getTodos");
    const jsonValue = await AsyncStorage.getItem("todos");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

const setTodos = async (todos: TodoItems) => {
  try {
    console.log("setTodos");
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem("todos", jsonValue);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

const Content = () => {
  const inputRef: any[] = [];

  const [newItem, setNewItem] = useState<string>("");
  const [todoItems, setTodoItems] = useState<TodoItems>([]);

  useEffect(() => {
    getTodos().then((todos) => {
      if (todos) {
        setTodoItems(todos);
      }
    });
  }, []);

  const itemTextBlurHandle = async (e: any) => {
    console.log("itemTextBlurHandle");
    const todos = await getTodos();
    setTodoItems(todos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addItemView}>
        <TextInput
          style={[styles.textInput, styles.addItemText]}
          value={newItem}
          autoFocus={true}
          onChangeText={(text) => {
            setNewItem(text);
          }}
        />
        <Ionicons
          name="add"
          size={30}
          color={Colors.text}
          onPress={() => {
            if (newItem) {
              let newTodos = [
                ...todoItems,
                {
                  id: todoItems.length + 1,
                  text: newItem,
                  checked: false,
                  editing: false,
                },
              ];
              setTodoItems(newTodos);
              setTodos(newTodos);

              setNewItem("");
            }
          }}
        />
      </View>
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
                  if (todoItem.id === item.id) {
                    todoItem.editing = true;
                  }
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
                  setTodos([...todos]);
                }}
              />
              {item.editing ? (
                <>
                  <TextInput
                    style={styles.textInput}
                    value={item.text}
                    autoFocus={true}
                    onBlur={itemTextBlurHandle}
                    ref={(ref) => (inputRef[index] = ref)}
                    onChangeText={(text) => {
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
                  <Ionicons
                    name="checkmark"
                    size={24}
                    color={Colors.text}
                    onPress={() => {
                      let todos: TodoItems = todoItems.map(
                        (todoItem: TodoItem) => {
                          todoItem.editing = false;
                          return todoItem;
                        }
                      );
                      setTodoItems([...todos]);
                    }}
                  />
                  <Ionicons
                    name="trash"
                    size={24}
                    color={Colors.text}
                    onPress={() => {
                      let todos: TodoItems = todoItems.filter(
                        (todoItem: TodoItem) => {
                          return todoItem.id !== item.id;
                        }
                      );
                      setTodoItems([...todos]);
                    }}
                  />
                </>
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
