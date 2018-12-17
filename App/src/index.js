import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet, View, Button, Platform, Text,
} from 'react-native';

// eslint-disable-next-line import/no-unresolved
import Todo from '~/components/Todo';

const bgColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  AddTodo = () => {
    const { todos } = this.state;
    this.setState({ todos: [...todos, 'Novo todo'] });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        {/* {this.state.todos.map(todo => {
          return(<Todo title={todo} />)
        })} */}
        {Platform.OS === 'ios' ? (
          <Text style={styles.text}>iOS</Text>
        ) : (
          <Text style={styles.text}>Android</Text>
        )}
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.AddTodo} />
      </View>
    );
  }
}
