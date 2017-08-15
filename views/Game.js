import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Board from '../components/Board'

export default class Game extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Find the word and put the letters in the right order!</Text>
        <Board> </Board>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1f7',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'center',
  }
});
