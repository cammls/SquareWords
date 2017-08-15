import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Game from './views/Game'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SquareWords Game</Text>
        <Game> </Game>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e49be3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 15,
    fontSize: 20
  }
});
