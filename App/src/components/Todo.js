import React, { Component } from "react";

import { Platform, StyleSheet, Text, View } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    title: "Todo padrão"
  };
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
