import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import Hr from 'react-native-hr-component';

const white = '#FFF';
const title = '#333';
const hrText = '#999';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: white,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  'container:last-child': {
    // marginBottom: 20,
    backgroundColor: hrText,
  },
  postHeader: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: title,
  },
  customStylesHere: {
    fontWeight: 'bold',
    color: hrText,
    fontSize: 12,
  },
  descricao: {
    marginTop: 5,
  },
});

const Post = ({
  data: {
    post: { titulo, autor, descricao },
  },
}) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{titulo}</Text>
      <Text>{autor}</Text>
      <Hr
        lineColor="#eee"
        width={1}
        textPadding={10}
        text="Comentário"
        textStyles={styles.customStylesHere}
      />
    </View>
    <Text style={styles.descricao}>{descricao}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};

export default Post;
