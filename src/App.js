/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  Button
} from "react-native";
import TodoList from "./pages/todo-list";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: props.todoList
    };
  }

  render() {
    const { todoList } = this.state;
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: TodoList,
            title: "To do List",
            passProps: { todoList }
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    alignItems: "stretch"
  }
});
