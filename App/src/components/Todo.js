import React, { Component } from "react";
import PropTypes from "prop-types";

import { Platform, StyleSheet, Text, View } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    title: "Todo padrão"
  };

  static propTypes = {
    title: PropTypes.string
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
