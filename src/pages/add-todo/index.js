import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import DummyDataProvider from "../../helpers/dummyDataProvider";
import TodoList from "../todo-list";

//Edit pending

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        id: new Date().now,
        description: "",
        done: false
      }
    };
  }

  saveTodo = () => {
    const { todo } = this.state;
    DummyDataProvider.addToDummyToDoList(todo);
    // pop resets the screen hence using push => improvement needed
    this.props.navigator.push({
      component: TodoList,
      title: "To Do List"
    });
  };

  setDescription = description => {
    const todo = {
      ...this.state.todo,
      description
    };
    this.setState({ todo });
  };

  render() {
    const { todo } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type description of todo here.."
          onChangeText={description => this.setDescription(description)}
        />
        <Button
          style={styles.saveTodo}
          backgroundColor="#4422BB"
          title="Save"
          onPress={this.saveTodo}
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
    alignItems: "stretch",
    marginTop: 80,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20
  },
  screenHeader: {
    marginBottom: 10
  },
  saveTodo: {
    marginTop: 10
  }
});

export default AddToDo;
