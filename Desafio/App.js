// eslint-disable-next-line import/no-unresolved
import '~/config/DevToolsConfig';
// eslint-disable-next-line import/no-unresolved
import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, ScrollView,
} from 'react-native';

// eslint-disable-next-line import/no-unresolved
import Post from '~/components/Post';

const white = '#FFF';
const primary = '#EE7777';
const title = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
  teste: {
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        post: {
          titulo: 'Aprendendo React Native',
          autor: 'Mateus Danielle',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      },
      {
        id: 1,
        post: {
          titulo: 'Aprendendo React Native',
          autor: 'Mateus Danielle',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      },
      {
        id: 2,
        post: {
          titulo: 'Aprendendo React Native',
          autor: 'Mateus Danielle',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      },
      {
        id: 3,
        post: {
          titulo: 'Aprendendo React Native',
          autor: 'Mateus Danielle',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      },
      {
        id: 4,
        post: {
          titulo: 'Aprendendo React Native',
          autor: 'Mateus Danielle',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView style={styles.teste}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
