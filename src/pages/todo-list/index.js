import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import DummyDataProvider from "../../helpers/dummyDataProvider";
import AddToDo from "../add-todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: DummyDataProvider.getDummyToDoList()
    };
  }

  markToDoComplete = index => {
    const { todoList } = this.state;
    todoList[index].done = !todoList[index].done;
    this.setState({
      todoList: [...todoList]
    });
  };

  addTodo = () => {
    this.props.navigator.push({
      component: AddToDo,
      title: "Add Task"
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.screenHeader}> Today's tasks</Text>
        {todoList.map((todo, index) => {
          return (
            <View key={index}>
              <CheckBox
                title={todo.description}
                checked={todo.done}
                onPress={() => this.markToDoComplete(index)}
              />
            </View>
          );
        })}
        <Button
          style={styles.addTodo}
          backgroundColor="#4422BB"
          icon={{ name: "add" }}
          title="Add"
          onPress={this.addTodo}
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
  addTodo: {
    marginTop: 10
  }
});

export default TodoList;
